import { drizzle } from "drizzle-orm";
import postgres from "postgres";
const connectionString = postgres(
  "postgresql://postgres.ojpmbntxzeuruezlhmgm:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
);
export const db = drizzle(connectionString);
