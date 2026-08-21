# SE Electronics Management System — Project Analysis

## Overview

A full-stack **electronics service management platform** (v6.0.4 Enterprise) built for **SE Electronics**, a Bangladeshi electronics company dealing in IPS, batteries, and stabilizers. The system manages the entire lifecycle: customer onboarding, service dispatch, staff management, payments, subscriptions, VIP cards, complaints, and reporting.

| Metric | Value |
|---|---|
| **Source Files** | 283 `.ts`/`.tsx` files |
| **Lines of Code** | ~50,267 |
| **Version** | 6.0.0 (package.json) |
| **Framework** | Next.js 15.5 (App Router + Turbopack) |
| **Database** | PostgreSQL via Neon Serverless |
| **ORM** | Drizzle ORM 0.44 |
| **Styling** | Tailwind CSS 3.4 |
| **Language** | TypeScript 5 (strict mode) |

---

## Tech Stack

### Core
| Layer | Technology |
|---|---|
| Frontend | React 19.1, Next.js 15.5 App Router |
| Styling | Tailwind CSS 3.4, custom brand color system (`#0a1a3a`) |
| Animations | Framer Motion 12 |
| Database | PostgreSQL (Neon Serverless) |
| ORM | Drizzle ORM + Drizzle Kit (migrations) |
| Auth | JWT sessions via `jose` (HS256), cookie-based |
| File Storage | AWS S3 / Cloudflare R2 (presigned URLs) |
| Image Processing | Sharp |
| PDF Generation | Puppeteer Core + pdf-lib |
| Email | Nodemailer |
| Validation | Zod 4 |
| Fonts | Ubuntu (Google Fonts), Old English Text MT, Edwardian Script ITC (local) |

### Notable Libraries
- `jsbarcode` + `qrcode` — Barcode/QR generation for IDs, invoices, certificates
- `react-toastify` — Toast notifications
- `react-fast-marquee` — Scrolling announcements
- `react-responsive-carousel` — Image carousels
- `use-debounce` — Input debouncing
- `@faker-js/faker` + `drizzle-seed` — Database seeding
- `nprogress` — Page transition progress bar

---

## Architecture

### Project Structure

```
src/
├── actions/          # 20 server action files (~230KB total)
│   ├── serviceActions.ts       (42KB — largest)
│   ├── staffActions.ts         (46KB)
│   ├── subscriptionActions.ts  (21KB)
│   ├── customerActions.ts      (11KB)
│   ├── paymentActions.ts       (15KB)
│   └── ...14 more
├── app/
│   ├── (dashboard)/   # Admin panel (13 route groups)
│   ├── customer/      # Customer portal (15 sections)
│   ├── staff/         # Staff portal
│   ├── api/           # API routes (notifications)
│   ├── login/         # Admin login
│   └── ...public pages (service-track, feedback, etc.)
├── components/
│   ├── features/      # 16 feature component directories
│   ├── layout/        # 12 layout components
│   └── ui/            # 18 reusable UI components
├── db/
│   ├── schema.ts      # 1,023 lines — 20+ tables
│   ├── drizzle.ts     # Connection setup
│   └── migrations/    # Drizzle migrations
├── lib/               # Core utilities (session, S3, email, SMS, sharp)
├── types/             # Central type definitions (421 lines)
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
├── validationSchemas/ # Zod schemas
├── constants/         # App constants, messages, subscription plans
└── middleware.ts      # Auth + bot protection middleware
```

---

## Database Schema (20+ Tables)

### Core Entities
| Table | Purpose |
|---|---|
| `admins` | Admin user accounts |
| `customers` | Customer profiles (VIP cards, warranty, referrals) |
| `invoices` | Purchase invoices with payment info |
| `products` | Products linked to invoices (warranty tracking) |
| `services` | Service requests (repair/install) — central entity |
| `serviceStatusHistory` | Audit trail of service status changes |
| `staffs` | Technician/electrician profiles (50+ columns) |

### Business Features
| Table | Purpose |
|---|---|
| `subscriptions` | Maintenance plan subscriptions |
| `applications` | Multi-type application workflow (service, staff, subscription, VIP) |
| `payments` | Staff payment tracking with multi-method support |
| `feedbacks` | Service feedback with structured Q&A + ratings |
| `staffComplaints` | Customer complaints against staff (hearing/punishment system) |
| `tasks` | Staff task assignment system |

### Communication & Support
| Table | Purpose |
|---|---|
| `notices` + `noticeRecipients` | Notice board with targeted delivery |
| `adminNotifications` | Admin alert system |
| `staffNotifications` | Staff alert system |
| `customerNotifications` | Customer alert system |
| `contactMessages` | Customer support messages |
| `smsLogs` | SMS delivery tracking |

### Referral System
| Table | Purpose |
|---|---|
| `referralBonuses` | VIP referral bonus tracking |
| `referralPaymentRequests` | Referral cashout requests |

### Supporting
| Table | Purpose |
|---|---|
| `agreements` + `userAgreements` | Legal agreement acceptance tracking |
| `authTokens` | Token-based auth for registration/download links |

### Enums (16 total)
`productType`, `serviceType`, `serviceStatus` (9 states), `subscriberStatus`, `applicationStatus`, `applicationTypes`, `staffRole`, `paymentTypes` (5 methods), `smsFrequency`, `smsLogStatus`, `agreementTypes`, `paymentStatus` (7 states), `reportStatus` (7 states), `statusTypes`, `serviceSourceTypes`, `resolvedByTypes`, `noticePriority`, `noticeTarget`, `subscriptionTypes`

---

## Authentication & Authorization

### Three-Role System
| Role | Login Path | Protected Routes | Portal |
|---|---|---|---|
| **Admin** | `/login` | `/`, `/services/*`, `/staffs`, `/customers`, etc. | Full dashboard |
| **Staff** | `/staff/login` | `/staff/profile`, `/staff/services`, `/staff/payments`, etc. | Staff portal |
| **Customer** | `/customer/login` | `/customer/profile`, `/customer/services`, `/customer/referral` | Customer portal |

### Security Features
- JWT tokens with configurable expiry (`SESSION_EXPIRY_DAY` env var)
- HttpOnly, Secure, SameSite=Lax cookies
- Bot user-agent blocking (WhatsApp, Facebook, Telegram, Discord, etc.)
- Active staff check on every request (blocked staff auto-logout)
- Role-based redirects (prevents cross-portal access)

---

## Key Features by Portal

### Admin Dashboard (`/(dashboard)/`)
- **Service Management**: Repairs & installations with 9-state workflow
- **Staff Management**: Profiles, verification, performance metrics, complaints
- **Customer Management**: Profiles, VIP cards, warranty status
- **Payment Processing**: Multi-method payments (cash, bKash, Nagad, Rocket, bank)
- **Invoice System**: PDF generation with barcodes
- **Subscription Management**: Maintenance plan lifecycle
- **Application Workflow**: Approve/reject staff, service, subscription, VIP applications
- **Notice Board**: Targeted notices with read/acknowledge tracking
- **Complaint System**: Full hearing/trial/punishment workflow
- **Referral Payments**: Process VIP referral cashout requests
- **Feedback Analytics**: Service quality monitoring

### Customer Portal (`/customer/`)
- Profile management
- Service request & tracking
- Invoice viewing & download
- VIP card (flip card UI)
- Referral system with balance tracking
- Feedback submission
- Complaint filing
- Maintenance plan enrollment
- Support/chat, notifications

### Staff Portal (`/staff/`)
- Profile & settings
- Service assignment & tracking
- Payment history
- Task management
- Notice board
- Performance feedback

### Public Pages
- Service request form (`/get-service`)
- Service tracking (`/service-track`)
- Application tracking (`/application-track`)
- Service feedback (`/service-feedback`)
- Service report (`/service-report`)
- Warranty check (`/check-warranty`)
- Staff registration (`/register`)
- Team members directory (`/team-members`, `/technicians`)
- Store location (`/location`)
- Prayer times (`/prayer-time`)

---

## Server Actions (Business Logic)

The 20 server action files contain the core business logic:

| File | Size | Responsibility |
|---|---|---|
| [staffActions.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/actions/staffActions.ts) | 46KB | Staff CRUD, verification, blocking, profile management |
| [serviceActions.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/actions/serviceActions.ts) | 42KB | Service lifecycle, status transitions, staff assignment |
| [subscriptionActions.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/actions/subscriptionActions.ts) | 21KB | Subscription plans, renewals, expiry |
| [customerAdminActions.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/actions/customerAdminActions.ts) | 16KB | Admin ops on customers (VIP, warranty) |
| [applicationActions.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/actions/applicationActions.ts) | 15KB | Application approval workflow |
| [paymentActions.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/actions/paymentActions.ts) | 15KB | Payment processing & tracking |
| [customerActions.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/actions/customerActions.ts) | 11KB | Customer self-service operations |
| [noticeActions.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/actions/noticeActions.ts) | 10KB | Notice CRUD & delivery |
| [complaintActions.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/actions/complaintActions.ts) | 9KB | Complaint filing & resolution |
| [feedbackActions.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/actions/feedbackActions.ts) | 8KB | Feedback collection & analytics |
| [taskActions.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/actions/taskActions.ts) | 8KB | Task assignment & tracking |
| [referralActions.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/actions/referralActions.ts) | 7KB | VIP referral system |
| [invoiceActions.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/actions/invoiceActions.ts) | 6KB | Invoice generation |
| [paymentRequestActions.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/actions/paymentRequestActions.ts) | 5KB | Referral payment requests |
| [notificationActions.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/actions/notificationActions.ts) | 4KB | Notification management |
| [adminActions.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/actions/adminActions.ts) | 4KB | Admin account operations |
| [authActions.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/actions/authActions.ts) | 2.6KB | Login/logout |
| [contactActions.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/actions/contactActions.ts) | 2.4KB | Contact messages |
| [productActions.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/actions/productActions.ts) | 0.5KB | Product queries |

---

## External Integrations

| Service | Purpose |
|---|---|
| **Neon PostgreSQL** | Serverless database |
| **Cloudflare R2** | Media storage (product photos, NID photos, staff photos) |
| **Nodemailer** | Email notifications |
| **SMS API** | Staff SMS notifications (configurable frequency) |
| **Puppeteer** | Server-side PDF/document rendering |

---

## Utility Infrastructure

| File | Purpose |
|---|---|
| [session.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/lib/session.ts) | JWT session management with cached verification |
| [s3.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/lib/s3.ts) | S3/R2 file operations with presigned URLs |
| [mail.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/lib/mail.ts) | Email transport |
| [sms.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/lib/sms.ts) | SMS delivery |
| [sharp.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/lib/sharp.ts) | Image processing/optimization |
| [id-gen.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/lib/id-gen.ts) | Custom ID generation |
| [autoHeal.ts](file:///home/talhakhan/Programming/seelectronics_management_system/src/lib/autoHeal.ts) | Self-healing utilities |

---

## Scripts & DevOps (29 scripts)

Extensive utility scripts for database management:
- **Seeding**: `seed.ts`, `seed_full.ts` (with Faker.js)
- **Diagnostics**: `check-cols.ts`, `check-enums.ts`, `check-tables.ts`, `diagnose_db.ts`
- **Data Ops**: `dump-customers.ts`, `find-customer.ts`, `list-customers.ts`, `verify-customers.ts`
- **Migrations**: `make_migration_safe.ts`
- **Cleanup**: `wipe.ts`

---

## Design System

### Brand Colors
A custom 11-shade palette built around deep navy (`#0a1a3a`):
```
brand-50  → #e8edf5  (lightest)
brand-900 → #0a1a3a  (primary)
brand-950 → #050d1d  (darkest)
```

### Typography
- **Primary**: Ubuntu (Google Fonts) — clean, modern body text
- **Display**: Old English Text MT — formal headings/certificates
- **Script**: Edwardian Script ITC — decorative elements (VIP cards, certificates)

---

## Observations

> [!TIP]
> ### Strengths
> - **Comprehensive domain model** — 20+ tables with rich relationships cover the full business lifecycle
> - **Three-portal architecture** — Clean separation of admin, staff, and customer experiences
> - **Strong server action patterns** — Business logic is well-organized by domain
> - **Database indexing** — Thoughtful composite and single-column indexes
> - **Security layers** — JWT + middleware + bot protection + active staff checks
> - **Rich feature set** — VIP cards, referrals, complaint hearings, subscription management

> [!WARNING]
> ### Areas for Improvement
> - **`ignoreBuildErrors: true`** in [next.config.ts](file:///home/talhakhan/Programming/seelectronics_management_system/next.config.ts#L4-L6) — TypeScript errors are silently suppressed at build time
> - **Large server action files** — `staffActions.ts` (46KB) and `serviceActions.ts` (42KB) could benefit from splitting
> - **`any` types** — Several places use `any` (task comments, auth token payloads, application applicantName)
> - **`suppressHydrationWarning`** on both `<html>` and `<body>` — may mask legitimate hydration issues
> - **No test files** found — 0 test coverage for 50K+ lines of business logic
> - **README is default** — Still has the create-next-app boilerplate, no project-specific documentation
> - **`definitions.ts`** is 3 bytes (empty) — dead file
> - **29 ad-hoc scripts** — Many diagnostic scripts suggest ongoing data quality challenges
