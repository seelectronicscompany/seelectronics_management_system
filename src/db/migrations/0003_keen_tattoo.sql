ALTER TABLE "products" ALTER COLUMN "warrantyEndDate" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "customers" ADD COLUMN "isWarrantyStopped" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "customers" ADD COLUMN "warrantyStoppedAt" timestamp with time zone;