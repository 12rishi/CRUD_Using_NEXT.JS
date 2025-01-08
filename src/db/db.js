import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
export const connectionString = postgres(
  "postgresql://postgres.ojpmbntxzeuruezlhmgm:hellomynameisrishi123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
);

export const db = drizzle(connectionString);
