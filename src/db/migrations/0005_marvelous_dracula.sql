ALTER TABLE "invoices" ADD COLUMN "dueType" varchar(50) DEFAULT 'due' NOT NULL;--> statement-breakpoint
ALTER TABLE "invoices" ADD COLUMN "notes" text;