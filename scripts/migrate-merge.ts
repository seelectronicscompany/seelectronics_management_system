/**
 * Database Migration Script: Merge OLD DB → NEW DB
 *
 * This script migrates all data from the old Neon database into the new one.
 * - Prefixes all old business IDs with "OB_" to prevent collisions
 * - Detects overlapping customers/staffs by phone number and merges them
 * - Computes missing columns (warrantyEndDate, services.status)
 * - Inserts in FK-safe order
 * - Logs every action for audit
 *
 * Usage:
 *   DRY_RUN=true npx tsx scripts/migrate-merge.ts    # preview only
 *   npx tsx scripts/migrate-merge.ts                  # execute for real
 */

import { neon } from "@neondatabase/serverless";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";

dotenv.config();

// ─── Configuration ───────────────────────────────────────────────────────────

const DRY_RUN = process.env.DRY_RUN === "true";
const ID_PREFIX = "OB_";

const OLD_DB_URL = process.env.DATABASE_URL_OLD!;
const NEW_DB_URL = process.env.DATABASE_URL!;

if (!OLD_DB_URL || !NEW_DB_URL) {
  console.error("❌ Missing DATABASE_URL_OLD or DATABASE_URL in .env");
  process.exit(1);
}

// ─── Logging ─────────────────────────────────────────────────────────────────

const logLines: string[] = [];
const logDir = path.join(process.cwd(), "backups");

function log(msg: string) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  logLines.push(line);
}

function saveLog() {
  const filename = `migration_log_${new Date().toISOString().replace(/[:.]/g, "-")}.txt`;
  fs.writeFileSync(path.join(logDir, filename), logLines.join("\n"), "utf-8");
  console.log(`📄 Log saved: backups/${filename}`);
}

// ─── DB Connections ──────────────────────────────────────────────────────────

const oldSql = neon(OLD_DB_URL);
const newSql = neon(NEW_DB_URL);

// Type-safe wrapper: .query() takes (string, params?) but TS overloads confuse it
type QueryFn = (sql: string, params?: any[]) => Promise<any[]>;
const queryOld: QueryFn = (sql, params) =>
  (oldSql as any).query(sql, params ?? []);
const queryNew: QueryFn = (sql, params) =>
  (newSql as any).query(sql, params ?? []);

// ─── Helpers ─────────────────────────────────────────────────────────────────

function prefix(id: string | null | undefined): string | null {
  if (id === null || id === undefined) return null;
  return `${ID_PREFIX}${id}`;
}

/**
 * Build a column list and $N placeholders for an INSERT.
 */
function buildInsert(row: Record<string, any>, columnOrder: string[]) {
  const cols = columnOrder.map((c) => `"${c}"`).join(", ");
  const placeholders = columnOrder.map((_, i) => `$${i + 1}`).join(", ");
  const values = columnOrder.map((c) => row[c] ?? null);
  return { cols, placeholders, values };
}

async function insertRow(
  table: string,
  row: Record<string, any>,
  columnOrder: string[],
  onConflict?: string,
) {
  const { cols, placeholders, values } = buildInsert(row, columnOrder);
  const conflict = onConflict ? ` ON CONFLICT ${onConflict}` : "";
  const sqlStr = `INSERT INTO "${table}" (${cols}) VALUES (${placeholders})${conflict}`;
  if (DRY_RUN) {
    log(`  [DRY RUN] Would insert into ${table}: id=${row.id || "N/A"}`);
    return;
  }
  await queryNew(sqlStr, values);
}

// ─── Overlap Detection ──────────────────────────────────────────────────────

interface OverlapMap {
  customerIdMap: Map<string, string>; // old customerId → new customerId
  staffIdMap: Map<string, string>; // old staffId → new staffId
  agreementIdMap: Map<string, string>; // old agreement uuid → new agreement uuid
  adminUuidMap: Map<string, string>; // old admin uuid → new admin uuid
}

async function buildOverlapMaps(): Promise<OverlapMap> {
  log("🔍 Building overlap maps...");

  // --- Customers: match by phone ---
  const oldCustomers = await queryOld(
    'SELECT * FROM customers ORDER BY "createdAt"',
  );
  const newCustomers = await queryNew(
    'SELECT * FROM customers ORDER BY "createdAt"',
  );

  const newCustomerByPhone = new Map<string, any>();
  for (const c of newCustomers) {
    newCustomerByPhone.set(c.phone, c);
  }

  const customerIdMap = new Map<string, string>();
  for (const oc of oldCustomers) {
    const match = newCustomerByPhone.get(oc.phone);
    if (match) {
      customerIdMap.set(oc.customerId, match.customerId);
      log(
        `  📎 Customer overlap: OLD "${oc.customerId}" (${oc.phone}) → NEW "${match.customerId}"`,
      );
    }
  }
  log(`  Found ${customerIdMap.size} customer overlaps`);

  // --- Staffs: match by phone ---
  const oldStaffs = await queryOld('SELECT * FROM staffs ORDER BY "createdAt"');
  const newStaffs = await queryNew('SELECT * FROM staffs ORDER BY "createdAt"');

  const newStaffByPhone = new Map<string, any>();
  for (const s of newStaffs) {
    newStaffByPhone.set(s.phone, s);
  }

  const staffIdMap = new Map<string, string>();
  for (const os of oldStaffs) {
    const match = newStaffByPhone.get(os.phone);
    if (match) {
      staffIdMap.set(os.staffId, match.staffId);
      log(
        `  📎 Staff overlap: OLD "${os.staffId}" (${os.phone}) → NEW "${match.staffId}"`,
      );
    }
  }
  log(`  Found ${staffIdMap.size} staff overlaps`);

  // --- Agreements: match by type + version ---
  const oldAgreements = await queryOld("SELECT * FROM agreements");
  const newAgreements = await queryNew("SELECT * FROM agreements");

  const agreementIdMap = new Map<string, string>();
  for (const oa of oldAgreements) {
    const match = newAgreements.find(
      (na: any) => na.type === oa.type && na.version === oa.version,
    );
    if (match) {
      agreementIdMap.set(oa.id, match.id);
      log(`  📎 Agreement overlap: OLD "${oa.id}" → NEW "${match.id}"`);
    }
  }

  // --- Admins: match by username ---
  const oldAdmins = await queryOld("SELECT * FROM admins");
  const newAdmins = await queryNew("SELECT * FROM admins");

  const adminUuidMap = new Map<string, string>();
  for (const oa of oldAdmins) {
    const match = newAdmins.find((na: any) => na.username === oa.username);
    if (match) {
      adminUuidMap.set(oa.id, match.id);
      log(`  📎 Admin overlap: OLD "${oa.username}" → skip (already exists)`);
    }
  }

  return { customerIdMap, staffIdMap, agreementIdMap, adminUuidMap };
}

// ─── Resolve IDs ─────────────────────────────────────────────────────────────

function resolveCustomerId(
  oldId: string | null,
  overlaps: OverlapMap,
): string | null {
  if (!oldId) return null;
  const merged = overlaps.customerIdMap.get(oldId);
  if (merged) return merged; // use NEW DB's existing ID (no prefix)
  return prefix(oldId); // prefix the old ID
}

function resolveStaffId(
  oldId: string | null,
  overlaps: OverlapMap,
): string | null {
  if (!oldId) return null;
  const merged = overlaps.staffIdMap.get(oldId);
  if (merged) return merged;
  return prefix(oldId);
}

// ─── Table Migrations ────────────────────────────────────────────────────────

async function migrateAdmins(overlaps: OverlapMap) {
  log("\n📦 Migrating: admins");
  const rows = await queryOld('SELECT * FROM admins ORDER BY "createdAt"');
  let inserted = 0,
    skipped = 0;

  for (const row of rows) {
    if (overlaps.adminUuidMap.has(row.id)) {
      log(`  ⏭️  Skip admin "${row.username}" (already exists in NEW DB)`);
      skipped++;
      continue;
    }
    await insertRow("admins", row, [
      "id",
      "username",
      "password",
      "createdAt",
      "updatedAt",
    ]);
    inserted++;
    log(`  ✅ Inserted admin "${row.username}"`);
  }

  log(`  📊 admins: ${inserted} inserted, ${skipped} skipped (duplicates)`);
}

async function migrateAgreements(overlaps: OverlapMap) {
  log("\n📦 Migrating: agreements");
  const rows = await queryOld('SELECT * FROM agreements ORDER BY "createdAt"');
  let inserted = 0,
    skipped = 0;

  for (const row of rows) {
    if (overlaps.agreementIdMap.has(row.id)) {
      log(
        `  ⏭️  Skip agreement "${row.type}" v${row.version} (already exists)`,
      );
      skipped++;
      continue;
    }
    await insertRow("agreements", row, [
      "id",
      "type",
      "title",
      "content",
      "version",
      "isActive",
      "createdAt",
      "updatedAt",
    ]);
    inserted++;
    log(`  ✅ Inserted agreement "${row.type}" v${row.version}`);
  }

  log(`  📊 agreements: ${inserted} inserted, ${skipped} skipped`);
}

async function migrateCustomers(overlaps: OverlapMap) {
  log("\n📦 Migrating: customers");
  const rows = await queryOld('SELECT * FROM customers ORDER BY "createdAt"');
  let inserted = 0,
    skipped = 0;

  for (const row of rows) {
    if (overlaps.customerIdMap.has(row.customerId)) {
      log(
        `  ⏭️  Skip customer "${row.customerId}" (phone ${row.phone} → merged to "${overlaps.customerIdMap.get(row.customerId)}")`,
      );
      skipped++;
      continue;
    }

    const transformed = {
      id: row.id,
      customerId: prefix(row.customerId),
      name: row.name,
      phone: row.phone,
      address: row.address,
      invoiceNumber: prefix(row.invoiceNumber),
      isActiveCustomer: true,
      profileCompleted: false,
      vipCardNumber: null,
      vipStatus: "pending",
      vipExpiryDate: null,
      referredByVipCard: null,
      referralBalance: 0,
      isWarrantyStopped: false,
      warrantyStoppedAt: null,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    };

    await insertRow("customers", transformed, Object.keys(transformed));
    inserted++;
  }

  log(`  📊 customers: ${inserted} inserted, ${skipped} merged to existing`);
}

async function migrateInvoices(overlaps: OverlapMap) {
  log("\n📦 Migrating: invoices");
  const rows = await queryOld('SELECT * FROM invoices ORDER BY "createdAt"');
  let inserted = 0;

  for (const row of rows) {
    const transformed = {
      id: row.id,
      invoiceNumber: prefix(row.invoiceNumber),
      customerId: resolveCustomerId(row.customerId, overlaps),
      customerName: row.customerName,
      customerPhone: row.customerPhone,
      customerAddress: row.customerAddress,
      date: row.date,
      paymentType: row.paymentType,
      subtotal: row.subtotal,
      total: row.total,
      dueAmount: row.dueAmount,
      dueType: "due",
      notes: null,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    };

    await insertRow("invoices", transformed, Object.keys(transformed));
    inserted++;
  }

  log(`  📊 invoices: ${inserted} inserted`);
}

async function migrateProducts() {
  log("\n📦 Migrating: products");
  const rows = await queryOld('SELECT * FROM products ORDER BY "createdAt"');
  let inserted = 0;

  for (const row of rows) {
    // Compute warrantyEndDate from warrantyStartDate + warrantyDurationMonths
    let warrantyEndDate: string;
    if (row.warrantyStartDate && row.warrantyDurationMonths) {
      const start = new Date(row.warrantyStartDate);
      start.setMonth(start.getMonth() + row.warrantyDurationMonths);
      warrantyEndDate = start.toISOString();
    } else {
      warrantyEndDate = row.warrantyStartDate || new Date().toISOString();
    }

    const transformed = {
      id: row.id,
      invoiceId: row.invoiceId, // UUID FK — no prefix needed
      type: row.type,
      model: row.model,
      quantity: row.quantity,
      unitPrice: row.unitPrice,
      warrantyStartDate: row.warrantyStartDate,
      warrantyDurationMonths: row.warrantyDurationMonths,
      warrantyEndDate: warrantyEndDate,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    };

    await insertRow("products", transformed, Object.keys(transformed));
    inserted++;
  }

  log(`  📊 products: ${inserted} inserted`);
}

async function migrateStaffs(overlaps: OverlapMap) {
  log("\n📦 Migrating: staffs");
  const rows = await queryOld('SELECT * FROM staffs ORDER BY "createdAt"');
  let inserted = 0,
    skipped = 0;

  for (const row of rows) {
    if (overlaps.staffIdMap.has(row.staffId)) {
      log(
        `  ⏭️  Skip staff "${row.staffId}" (phone ${row.phone} → merged to "${overlaps.staffIdMap.get(row.staffId)}")`,
      );
      skipped++;
      continue;
    }

    const transformed = {
      id: row.id,
      staffId: prefix(row.staffId),
      username: null,
      password: null,
      name: row.name,
      fatherName: row.fatherName,
      phone: row.phone,
      currentStreetAddress: row.currentStreetAddress,
      currentDistrict: row.currentDistrict,
      currentPoliceStation: row.currentPoliceStation,
      currentPostOffice: row.currentPostOffice,
      permanentStreetAddress: row.permanentStreetAddress,
      permanentDistrict: row.permanentDistrict,
      permanentPoliceStation: row.permanentPoliceStation,
      permanentPostOffice: row.permanentPostOffice,
      photoKey: row.photoKey,
      nidFrontPhotoKey: row.nidFrontPhotoKey,
      nidBackPhotoKey: row.nidBackPhotoKey,
      skills: null,
      bio: null,
      hasRepairExperience: row.hasRepairExperience,
      repairExperienceYears: row.repairExperienceYears,
      hasInstallationExperience: row.hasInstallationExperience,
      installationExperienceYears: row.installationExperienceYears,
      role: row.role,
      isVerified: row.isVerified,
      isActiveStaff: true,
      profileCompleted: false,
      rating: 0,
      totalServices: 0,
      successfulServices: 0,
      canceledServices: 0,
      pendingServices: 0,
      serviceCenterServices: 0,
      paymentPreference: row.paymentPreference,
      walletNumber: row.walletNumber,
      bankInfo: row.bankInfo ? JSON.stringify(row.bankInfo) : null,
      docs: null,
      createdFrom: row.createdFrom,
      smsNotificationEnabled: true,
      smsWorkingHoursOnly: true,
      smsFrequency: "immediate",
      smsOptOut: false,
      ipAddress: row.ipAddress,
      userAgent: row.userAgent,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    };

    await insertRow("staffs", transformed, Object.keys(transformed));
    inserted++;
  }

  log(`  📊 staffs: ${inserted} inserted, ${skipped} merged to existing`);
}

async function migrateServices(overlaps: OverlapMap) {
  log("\n📦 Migrating: services");
  const rows = await queryOld('SELECT * FROM services ORDER BY "createdAt"');

  // Pre-fetch the latest status from serviceStatusHistory for each service
  const statusHistories = await queryOld(`
    SELECT DISTINCT ON ("serviceId") "serviceId", "status"
    FROM "serviceStatusHistory"
    ORDER BY "serviceId", "createdAt" DESC
  `);
  const latestStatusMap = new Map<string, string>();
  for (const h of statusHistories) {
    if (h.status) latestStatusMap.set(h.serviceId, h.status);
  }

  let inserted = 0;

  for (const row of rows) {
    // Derive status from latest serviceStatusHistory entry
    const derivedStatus = latestStatusMap.get(row.serviceId) || "pending";

    const transformed = {
      id: row.id,
      serviceId: prefix(row.serviceId),
      customerId: resolveCustomerId(row.customerId, overlaps),
      customerName: row.customerName,
      customerPhone: row.customerPhone,
      customerAddress: row.customerAddress,
      customerAddressDistrict: row.customerAddressDistrict,
      customerAddressPoliceStation: row.customerAddressPoliceStation,
      customerAddressPostOffice: row.customerAddressPostOffice,
      staffId: resolveStaffId(row.staffId, overlaps),
      staffRole: row.staffRole,
      staffName: row.staffName,
      staffPhone: row.staffPhone,
      staffReport: row.staffReport ? JSON.stringify(row.staffReport) : null,
      type: row.type,
      productType: row.productType,
      productModel: row.productModel,
      ipsBrand: row.ipsBrand,
      productFrontPhotoKey: row.productFrontPhotoKey,
      productBackPhotoKey: row.productBackPhotoKey,
      warrantyCardPhotoKey: row.warrantyCardPhotoKey,
      powerRating: row.powerRating,
      memoNumber: row.memoNumber,
      reportedIssue: row.reportedIssue,
      status: derivedStatus,
      createdFrom: row.createdFrom,
      resolvedBy: row.resolvedBy,
      isActive: row.isActive,
      ipAddress: row.ipAddress,
      userAgent: row.userAgent,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    };

    await insertRow("services", transformed, Object.keys(transformed));
    inserted++;
  }

  log(`  📊 services: ${inserted} inserted (status derived from history)`);
}

async function migrateServiceStatusHistory() {
  log("\n📦 Migrating: serviceStatusHistory");
  const rows = await queryOld(
    'SELECT * FROM "serviceStatusHistory" ORDER BY "createdAt"',
  );
  let inserted = 0;

  for (const row of rows) {
    const transformed = {
      id: row.id,
      serviceId: prefix(row.serviceId),
      status: row.status,
      statusType: row.statusType,
      customLabel: row.customLabel,
      customNote: row.customNote,
      cancelReason: row.cancelReason,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    };

    await insertRow(
      "serviceStatusHistory",
      transformed,
      Object.keys(transformed),
    );
    inserted++;
  }

  log(`  📊 serviceStatusHistory: ${inserted} inserted`);
}

async function migrateSubscriptions() {
  log("\n📦 Migrating: subscriptions");
  const rows = await queryOld(
    'SELECT * FROM subscriptions ORDER BY "createdAt"',
  );
  let inserted = 0;

  for (const row of rows) {
    const transformed = {
      id: row.id,
      subscriptionId: prefix(row.subscriptionId),
      customerId: null, // old schema doesn't have this
      name: row.name,
      phone: row.phone,
      streetAddress: row.streetAddress,
      district: row.district,
      policeStation: row.policeStation,
      postOffice: row.postOffice,
      subscriptionDuration: row.subscriptionDuration,
      subscriptionType: row.subscriptionType,
      batteryType: row.batteryType,
      ipsBrand: row.ipsBrand,
      ipsPowerRating: row.ipsPowerRating,
      paymentType: row.paymentType,
      basePrice: row.basePrice,
      discountAmount: row.discountAmount,
      surchargeAmount: row.surchargeAmount,
      totalFee: row.totalFee,
      walletNumber: row.walletNumber,
      transactionId: row.transactionId,
      bankInfo: row.bankInfo ? JSON.stringify(row.bankInfo) : null,
      isActive: row.isActive,
      ipAddress: row.ipAddress,
      userAgent: row.userAgent,
      status: "active",
      servicesCompleted: row.servicesCompleted,
      expiryNotified: false,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    };

    await insertRow("subscriptions", transformed, Object.keys(transformed));
    inserted++;
  }

  log(`  📊 subscriptions: ${inserted} inserted`);
}

async function migrateApplications(overlaps: OverlapMap) {
  log("\n📦 Migrating: applications");
  const rows = await queryOld(
    'SELECT * FROM applications ORDER BY "createdAt"',
  );
  let inserted = 0,
    skipped = 0;

  // Pre-fetch existing applicantIds in NEW DB to avoid unique constraint violations
  const existingApps = await queryNew('SELECT "applicantId" FROM applications');
  const existingApplicantIds = new Set(
    existingApps.map((a: any) => a.applicantId),
  );

  for (const row of rows) {
    // applicantId is polymorphic — resolve based on type
    let resolvedApplicantId: string | null = row.applicantId;

    if (row.type === "staff_application") {
      resolvedApplicantId = resolveStaffId(row.applicantId, overlaps);
    } else if (row.type === "service_application") {
      resolvedApplicantId = prefix(row.applicantId);
    } else if (row.type === "subscription_application") {
      resolvedApplicantId = prefix(row.applicantId);
    } else {
      resolvedApplicantId = prefix(row.applicantId);
    }

    // Skip if this applicantId already has an application in NEW DB
    if (resolvedApplicantId && existingApplicantIds.has(resolvedApplicantId)) {
      log(
        `  ⏭️  Skip application for "${resolvedApplicantId}" (applicant already has application in NEW DB)`,
      );
      skipped++;
      continue;
    }

    const transformed = {
      id: row.id,
      applicationId: prefix(row.applicationId),
      applicantId: resolvedApplicantId,
      status: row.status,
      type: row.type,
      rejectReason: row.rejectReason,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    };

    await insertRow("applications", transformed, Object.keys(transformed));
    inserted++;
  }

  log(
    `  📊 applications: ${inserted} inserted, ${skipped} skipped (existing applicant)`,
  );
}

async function migrateUserAgreements(overlaps: OverlapMap) {
  log("\n📦 Migrating: userAgreements");
  const rows = await queryOld(
    'SELECT * FROM "userAgreements" ORDER BY "createdAt"',
  );
  let inserted = 0;

  for (const row of rows) {
    const resolvedAgreementId =
      overlaps.agreementIdMap.get(row.agreementId) || row.agreementId;

    const transformed = {
      id: row.id,
      userId: resolveStaffId(row.userId, overlaps),
      agreementId: resolvedAgreementId,
      agreedAt: row.agreedAt,
      ipAddress: row.ipAddress,
      userAgent: row.userAgent,
      createdAt: row.createdAt,
    };

    await insertRow("userAgreements", transformed, Object.keys(transformed));
    inserted++;
  }

  log(`  📊 userAgreements: ${inserted} inserted`);
}

async function migratePayments(overlaps: OverlapMap) {
  log("\n📦 Migrating: payments");
  const rows = await queryOld('SELECT * FROM payments ORDER BY "createdAt"');
  let inserted = 0;

  for (const row of rows) {
    const transformed = {
      id: row.id,
      paymentId: prefix(row.paymentId),
      staffId: resolveStaffId(row.staffId, overlaps),
      invoiceNumber: prefix(row.invoiceNumber),
      paymentMethod: row.paymentMethod,
      senderWalletNumber: row.senderWalletNumber,
      senderBankInfo: row.senderBankInfo
        ? JSON.stringify(row.senderBankInfo)
        : null,
      receiverWalletNumber: row.receiverWalletNumber,
      receiverBankInfo: row.receiverBankInfo
        ? JSON.stringify(row.receiverBankInfo)
        : null,
      amount: row.amount,
      serviceId: null, // old schema doesn't have this
      status: "completed", // old schema has no paymentStatus — assume completed
      transactionId: row.transactionId,
      description: row.description,
      date: row.date,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    };

    await insertRow("payments", transformed, Object.keys(transformed));
    inserted++;
  }

  log(`  📊 payments: ${inserted} inserted`);
}

async function migrateFeedbacks(overlaps: OverlapMap) {
  log("\n📦 Migrating: feedbacks");
  const rows = await queryOld('SELECT * FROM feedbacks ORDER BY "createdAt"');
  let inserted = 0;

  for (const row of rows) {
    const transformed = {
      id: row.id,
      serviceId: prefix(row.serviceId),
      customerId: resolveCustomerId(row.customerId, overlaps),
      feedbacks: row.feedbacks ? JSON.stringify(row.feedbacks) : null,
      rating: row.rating,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    };

    await insertRow("feedbacks", transformed, Object.keys(transformed));
    inserted++;
  }

  log(`  📊 feedbacks: ${inserted} inserted`);
}

// ─── Verification ────────────────────────────────────────────────────────────

async function verify() {
  log("\n🔍 Running post-migration verification...");

  // Row counts
  const tables = [
    "admins",
    "customers",
    "invoices",
    "products",
    "services",
    "staffs",
    "subscriptions",
    "applications",
    "agreements",
    "payments",
    "feedbacks",
  ];

  log("\n  📊 Row counts in NEW DB after migration:");
  for (const table of tables) {
    const result = await queryNew(`SELECT COUNT(*) as count FROM "${table}"`);
    log(`    ${table}: ${result[0].count}`);
  }

  const statusHistoryResult = await queryNew(
    'SELECT COUNT(*) as count FROM "serviceStatusHistory"',
  );
  log(`    serviceStatusHistory: ${statusHistoryResult[0].count}`);

  const userAgreementsResult = await queryNew(
    'SELECT COUNT(*) as count FROM "userAgreements"',
  );
  log(`    userAgreements: ${userAgreementsResult[0].count}`);

  // Check for migrated data (OB_ prefix)
  log("\n  📊 Migrated records (OB_ prefix):");
  const migratedCustomers = await queryNew(
    `SELECT COUNT(*) as count FROM customers WHERE "customerId" LIKE 'OB_%'`,
  );
  log(`    customers with OB_ prefix: ${migratedCustomers[0].count}`);

  const migratedServices = await queryNew(
    `SELECT COUNT(*) as count FROM services WHERE "serviceId" LIKE 'OB_%'`,
  );
  log(`    services with OB_ prefix: ${migratedServices[0].count}`);

  const migratedStaffs = await queryNew(
    `SELECT COUNT(*) as count FROM staffs WHERE "staffId" LIKE 'OB_%'`,
  );
  log(`    staffs with OB_ prefix: ${migratedStaffs[0].count}`);

  // FK integrity checks
  log("\n  🔗 FK integrity checks:");

  const orphanedInvoices = await queryNew(`
    SELECT COUNT(*) as count FROM invoices i
    LEFT JOIN customers c ON c."customerId" = i."customerId"
    WHERE c.id IS NULL
  `);
  log(
    `    Orphaned invoices (no matching customer): ${orphanedInvoices[0].count} ${Number(orphanedInvoices[0].count) > 0 ? "⚠️" : "✅"}`,
  );

  const orphanedServices = await queryNew(`
    SELECT COUNT(*) as count FROM services s
    LEFT JOIN customers c ON c."customerId" = s."customerId"
    WHERE s."customerId" IS NOT NULL AND c.id IS NULL
  `);
  log(
    `    Orphaned services (no matching customer): ${orphanedServices[0].count} ${Number(orphanedServices[0].count) > 0 ? "⚠️" : "✅"}`,
  );

  const orphanedStatusHistory = await queryNew(`
    SELECT COUNT(*) as count FROM "serviceStatusHistory" ssh
    LEFT JOIN services s ON s."serviceId" = ssh."serviceId"
    WHERE s.id IS NULL
  `);
  log(
    `    Orphaned status history (no matching service): ${orphanedStatusHistory[0].count} ${Number(orphanedStatusHistory[0].count) > 0 ? "⚠️" : "✅"}`,
  );

  const orphanedProducts = await queryNew(`
    SELECT COUNT(*) as count FROM products p
    LEFT JOIN invoices i ON i.id = p."invoiceId"
    WHERE i.id IS NULL
  `);
  log(
    `    Orphaned products (no matching invoice): ${orphanedProducts[0].count} ${Number(orphanedProducts[0].count) > 0 ? "⚠️" : "✅"}`,
  );

  const orphanedPayments = await queryNew(`
    SELECT COUNT(*) as count FROM payments p
    LEFT JOIN staffs s ON s."staffId" = p."staffId"
    WHERE p."staffId" IS NOT NULL AND s.id IS NULL
  `);
  log(
    `    Orphaned payments (no matching staff): ${orphanedPayments[0].count} ${Number(orphanedPayments[0].count) > 0 ? "⚠️" : "✅"}`,
  );

  const orphanedFeedbacks = await queryNew(`
    SELECT COUNT(*) as count FROM feedbacks f
    LEFT JOIN services s ON s."serviceId" = f."serviceId"
    WHERE s.id IS NULL
  `);
  log(
    `    Orphaned feedbacks (no matching service): ${orphanedFeedbacks[0].count} ${Number(orphanedFeedbacks[0].count) > 0 ? "⚠️" : "✅"}`,
  );

  // Spot check warrantyEndDate
  log("\n  📅 Warranty end date spot check (5 random migrated products):");
  const spotCheck = await queryNew(`
    SELECT p.model, p."warrantyStartDate", p."warrantyDurationMonths", p."warrantyEndDate"
    FROM products p
    JOIN invoices i ON i.id = p."invoiceId"
    WHERE i."invoiceNumber" LIKE 'OB_%'
    LIMIT 5
  `);
  for (const p of spotCheck) {
    log(
      `    ${p.model}: start=${p.warrantyStartDate}, months=${p.warrantyDurationMonths}, end=${p.warrantyEndDate}`,
    );
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────

const RESUME_FROM = process.env.RESUME_FROM; // e.g. "applications"

async function main() {
  log("═══════════════════════════════════════════════════════");
  log(`🚀 Database Migration: OLD → NEW`);
  log(`   Mode: ${DRY_RUN ? "🧪 DRY RUN (no writes)" : "🔴 LIVE EXECUTION"}`);
  if (RESUME_FROM) log(`   ⏩ RESUMING FROM: ${RESUME_FROM}`);
  log(`   Old DB: ${OLD_DB_URL.replace(/:[^@]+@/, ":***@")}`);
  log(`   New DB: ${NEW_DB_URL.replace(/:[^@]+@/, ":***@")}`);
  log(`   ID Prefix: "${ID_PREFIX}"`);
  log("═══════════════════════════════════════════════════════");

  try {
    // Step 1: Build overlap maps (always needed for ID resolution)
    const overlaps = await buildOverlapMaps();

    // Step 2: Migrate tables in FK-safe order
    const steps: [string, () => Promise<void>][] = [
      ["admins", () => migrateAdmins(overlaps)],
      ["agreements", () => migrateAgreements(overlaps)],
      ["customers", () => migrateCustomers(overlaps)],
      ["invoices", () => migrateInvoices(overlaps)],
      ["products", () => migrateProducts()],
      ["staffs", () => migrateStaffs(overlaps)],
      ["services", () => migrateServices(overlaps)],
      ["serviceStatusHistory", () => migrateServiceStatusHistory()],
      ["subscriptions", () => migrateSubscriptions()],
      ["applications", () => migrateApplications(overlaps)],
      ["userAgreements", () => migrateUserAgreements(overlaps)],
      ["payments", () => migratePayments(overlaps)],
      ["feedbacks", () => migrateFeedbacks(overlaps)],
    ];

    let shouldRun = !RESUME_FROM; // if no RESUME_FROM, run all
    for (const [name, fn] of steps) {
      if (RESUME_FROM && name === RESUME_FROM) shouldRun = true;
      if (!shouldRun) {
        log(`\n⏭️  Skipping ${name} (already completed)`);
        continue;
      }
      await fn();
    }

    // Step 3: Verify
    if (!DRY_RUN) {
      await verify();
    }

    log("\n✅ Migration complete!");
  } catch (error: any) {
    log(`\n❌ Migration failed: ${error.message}`);
    log(`   Stack: ${error.stack}`);
    throw error;
  } finally {
    saveLog();
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
