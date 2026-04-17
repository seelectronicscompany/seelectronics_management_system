import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

async function checkSchemas() {
    const sql = neon(process.env.DATABASE_URL!);
    try {
        const result = await sql`SELECT schema_name FROM information_schema.schemata;`;
        console.log('Schemas:', result);
    } catch (error) {
        console.error('Error checking schemas:', error);
    }
}

checkSchemas();
