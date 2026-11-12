import { config } from "dotenv";
import { defineConfig } from "prisma/config";

// 모노레포 루트의 .env 하나만 사용 (Prisma 명령은 apps/api에서 실행)
config({ path: "../../.env" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
