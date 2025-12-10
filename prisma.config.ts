
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL!,
    // @ts-expect-error: directUrl is supported in runtime but missing in types
    directUrl: process.env.DIRECT_URL!,
  },
});
