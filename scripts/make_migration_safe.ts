import * as fs from 'fs';
import * as path from 'path';

const migrationFile = path.join(__dirname, '../src/db/migrations/0000_optimal_ravenous.sql');

function makeSafe() {
    if (!fs.existsSync(migrationFile)) {
        console.error("Migration file not found:", migrationFile);
        process.exit(1);
    }

    let content = fs.readFileSync(migrationFile, 'utf8');

    // 1. Replace CREATE TABLE with CREATE TABLE IF NOT EXISTS
    content = content.replace(/CREATE TABLE "/g, 'CREATE TABLE IF NOT EXISTS "');

    // 2. Replace CREATE INDEX with CREATE INDEX IF NOT EXISTS
    content = content.replace(/CREATE INDEX "/g, 'CREATE INDEX IF NOT EXISTS "');

    // 3. Wrap ALTER TABLE ... ADD CONSTRAINT in DO blocks
    // Note: Drizzle SQL statements are separated by "--> statement-breakpoint"
    const parts = content.split('--> statement-breakpoint');
    const modifiedParts = parts.map(part => {
        const trimmed = part.trim();
        if (trimmed.startsWith('ALTER TABLE') && trimmed.includes('ADD CONSTRAINT')) {
            // Remove any trailing semicolon inside the DO block and place it properly
            const queryWithoutSemicolon = trimmed.replace(/;$/, '');
            return `\nDO $$ BEGIN\n    ${queryWithoutSemicolon};\nEXCEPTION\n    WHEN duplicate_object THEN null;\nEND $$;\n`;
        }
        return part;
    });

    content = modifiedParts.join('--> statement-breakpoint');

    fs.writeFileSync(migrationFile, content, 'utf8');
    console.log("Migration file updated successfully and made safe against pre-existing tables/indexes/constraints!");
}

makeSafe();
