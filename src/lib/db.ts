import { neon, NeonQueryFunction } from '@neondatabase/serverless';

// Ensure environments with local corporate/antivirus SSL inspection can connect to Neon PostgreSQL
if (typeof process !== 'undefined' && process.env) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

let sqlClient: NeonQueryFunction<false, false> | null = null;

export function getDb(): NeonQueryFunction<false, false> | null {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    return null;
  }

  if (!sqlClient) {
    sqlClient = neon(connectionString);
  }

  return sqlClient;
}

export function isDbConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}
