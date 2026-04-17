import * as schema from "@/db/schema";
import { neon } from "@neondatabase/serverless";

import { drizzle } from "drizzle-orm/neon-http";

const connectionString = process.env.DATABASE_URL!;

// Use neon-http to communicate over standard HTTP (fetch)
// This avoids the "All attempts to open a WebSocket failed" errors in Node.js/Dev mode
const sql = neon(connectionString);

export const db = drizzle(sql, { schema });