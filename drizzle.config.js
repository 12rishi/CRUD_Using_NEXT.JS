const { defineConfig } = require("drizzle-kit");

defineConfig({
  schema: "./src/db/schema.js",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://postgres.ojpmbntxzeuruezlhmgm:hellomynameisrishi123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres",
  },
});
