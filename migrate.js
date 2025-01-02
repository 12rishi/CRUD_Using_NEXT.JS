import { connectionString, db } from "@/db/db";
import { migrate } from "drizzle-orm/postgres-js/migrator";
(async () => {
  await migrate(db, { migrationsFolder: "./drizzle" });
  await connectionString.end();
})();