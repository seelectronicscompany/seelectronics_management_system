import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "@/db/schema";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error("DATABASE_URL is not set in .env");
  process.exit(1);
}

const sql = neon(DATABASE_URL);
const db = drizzle(sql, { schema });

async function main() {
  console.log("🌱 Starting Database Seed...");

  const adminUser = process.env.ADMIN_DASHBOARD_USERNAME || "admin";
  const adminPass = process.env.ADMIN_DASHBOARD_PASSWORD || "admin123";

  try {
    console.log("🧹 Clearing existing data...");
    
    // Ordered deletion to handle foreign key constraints
    const tables = [
      schema.noticeRecipients,
      schema.notices,
      schema.staffNotifications,
      schema.adminNotifications,
      schema.customerNotifications,
      schema.feedbacks,
      schema.staffComplaints,
      schema.serviceStatusHistory,
      schema.tasks,
      schema.payments,
      schema.services,
      schema.products,
      schema.invoices,
      schema.referralPaymentRequests,
      schema.referralBonuses,
      schema.applications,
      schema.subscriptions,
      schema.userAgreements,
      schema.agreements,
      schema.smsLogs,
      schema.authTokens,
      schema.contactMessages,
      schema.customers,
      schema.staffs,
      schema.admins,
    ];

    for (const table of tables) {
      await db.delete(table);
    }
    
    console.log("✅ Database cleared");

    // 1. Seed Agreements
    console.log("⏳ Seeding agreements...");
    const agreement = await db.insert(schema.agreements).values({
      type: "application_declaration",
      title: "Service Application Declaration",
      content: "I hereby declare that all the information provided is true and correct...",
      version: "1.0",
      isActive: true,
    }).returning({ id: schema.agreements.id });
    console.log("✅ Agreements seeded");

    // 2. Seed Admin
    console.log("⏳ Seeding admin...");
    const hashedAdminPassword = await bcrypt.hash(adminPass, 10);
    const [admin] = await db.insert(schema.admins).values({
      username: adminUser,
      password: hashedAdminPassword,
    }).returning();
    console.log(`✅ Admin seeded: ${adminUser}`);

    // 3. Seed Staffs
    console.log("⏳ Seeding staffs...");
    const staffIds: string[] = [];
    const hashedStaffPassword = await bcrypt.hash("staff123", 10);
    
    for (let i = 0; i < 5; i++) {
        const sId = `STF${1000 + i}`;
        staffIds.push(sId);
        await db.insert(schema.staffs).values({
            staffId: sId,
            username: `staff${i + 1}`,
            password: hashedStaffPassword,
            name: faker.person.fullName(),
            fatherName: faker.person.fullName(),
            phone: `01${faker.string.numeric(9)}`,
            currentStreetAddress: faker.location.streetAddress(),
            currentDistrict: "Dhaka",
            permanentStreetAddress: faker.location.streetAddress(),
            permanentDistrict: "Dhaka",
            photoKey: faker.system.fileName(),
            nidFrontPhotoKey: faker.system.fileName(),
            nidBackPhotoKey: faker.system.fileName(),
            role: i % 2 === 0 ? "technician" : "electrician",
            isVerified: true,
            isActiveStaff: true,
            profileCompleted: true,
            paymentPreference: "bkash",
            createdFrom: "dashboard",
        });
    }
    console.log("✅ Staffs seeded");

    // 4. Seed Customers
    console.log("⏳ Seeding customers...");
    const customerIds: string[] = [];
    for (let i = 0; i < 10; i++) {
        const cId = `CUST${1000 + i}`;
        customerIds.push(cId);
        await db.insert(schema.customers).values({
            customerId: cId,
            name: faker.person.fullName(),
            phone: `01${faker.string.numeric(9)}`,
            address: faker.location.streetAddress(),
            invoiceNumber: `INV-${3000 + i}`,
            isActiveCustomer: true,
            profileCompleted: true,
            vipCardNumber: i < 5 ? `VIP-${5000 + i}` : null,
            vipStatus: i < 5 ? "approved" : "pending",
        });
    }
    console.log("✅ Customers seeded");

    // 5. Seed Invoices & Products
    console.log("⏳ Seeding invoices and products...");
    for (let i = 0; i < 5; i++) {
      const invNum = `INV-${3000 + i}`;
      const [invoice] = await db.insert(schema.invoices).values({
        invoiceNumber: invNum,
        customerId: customerIds[i],
        customerName: faker.person.fullName(),
        customerPhone: `01${faker.string.numeric(9)}`,
        customerAddress: faker.location.streetAddress(),
        paymentType: "cash",
        subtotal: 5000,
        total: 5000,
        dueAmount: 0,
      }).returning();

      await db.insert(schema.products).values({
        invoiceId: invoice.id,
        type: "ips",
        model: faker.commerce.productName(),
        quantity: 1,
        unitPrice: 5000,
        warrantyStartDate: new Date(),
        warrantyDurationMonths: 12,
      });
    }
    console.log("✅ Invoices and products seeded");

    // 6. Seed Services, Status History & Tasks
    console.log("⏳ Seeding services, history, and tasks...");
    const serviceStatuses: any[] = ["pending", "in_progress", "completed", "canceled"];
    
    for (let i = 0; i < 8; i++) {
      const srvId = `SRV${7000 + i}`;
      const cId = customerIds[i % customerIds.length];
      const stfId = staffIds[i % staffIds.length];
      const status = serviceStatuses[i % serviceStatuses.length];

      await db.insert(schema.services).values({
        serviceId: srvId,
        customerId: cId,
        customerName: faker.person.fullName(),
        customerPhone: `01${faker.string.numeric(9)}`,
        customerAddress: faker.location.streetAddress(),
        staffId: stfId,
        staffName: faker.person.fullName(),
        staffPhone: `01${faker.string.numeric(9)}`,
        type: i % 2 === 0 ? "repair" : "install",
        status: status,
        productType: i % 3 === 0 ? "ips" : "battery",
        productModel: faker.commerce.productName(),
        createdFrom: "dashboard",
        isActive: true,
      });

      await db.insert(schema.serviceStatusHistory).values({
        serviceId: srvId,
        status: status,
        statusType: "system",
      });

      await db.insert(schema.tasks).values({
        taskId: `TSK${8000 + i}`,
        staffId: stfId,
        serviceId: srvId,
        title: faker.lorem.words(3),
        description: faker.lorem.sentence(),
        priority: "normal",
        status: status === "completed" ? "completed" : "pending",
      });
    }
    console.log("✅ Services and Tasks seeded");

    // 7. Seed Notices
    console.log("⏳ Seeding notices...");
    for (let i = 0; i < 3; i++) {
      const [notice] = await db.insert(schema.notices).values({
        noticeId: `NTC${9000 + i}`,
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(1),
        priority: "normal",
        targetType: "all",
        createdBy: admin.id,
      }).returning();

      // Seed some recipients
      await db.insert(schema.noticeRecipients).values({
        noticeId: notice.id,
        staffId: staffIds[0],
      });
    }
    console.log("✅ Notices seeded");

    console.log("✨ Seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}

main();
