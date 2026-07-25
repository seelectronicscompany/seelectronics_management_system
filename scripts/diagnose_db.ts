import { drizzle } from "drizzle-orm/neon-serverless";
import { sql } from 'drizzle-orm';
import 'dotenv/config';

async function diagnose() {
    const db = drizzle(process.env.DATABASE_URL!);
    try {
        console.log("Checking tables...");
        const tables = await db.execute(sql`
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public'
        `);
        console.log("Existing tables:", (tables as any).rows || tables);

        console.log("Checking user-defined types (enums)...");
        const types = await db.execute(sql`
            SELECT t.typname 
            FROM pg_type t 
            JOIN pg_namespace n ON n.oid = t.typnamespace 
            WHERE n.nspname = 'public' AND t.typtype = 'e'
        `);
        console.log("Existing enums:", (types as any).rows || types);

        console.log("Checking drizzle migration table...");
        try {
            const migrations = await db.execute(sql`
                SELECT * FROM "__drizzle_migrations"
            `);
            console.log("Migrations logged in DB:", (migrations as any).rows || migrations);
        } catch (e) {
            console.log("No __drizzle_migrations table found.");
        }

        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

diagnose();
