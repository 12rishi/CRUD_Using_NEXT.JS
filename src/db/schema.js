import { sql } from "drizzle-orm";
import {
  pgTable,
  PgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
export const recipes = pgTable("recipe", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 21 }).notNull().unique(),
  description: text("description", { length: 200 }),
  subname: varchar("subname", { length: 50 }),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});
