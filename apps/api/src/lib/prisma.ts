import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

// api 전체가 같이 쓰는 PrismaClient 하나 (DB 연결은 adapter-pg가 담당)
const adapter = new PrismaPg({ connectionString: process.env["DATABASE_URL"] });

export const prisma = new PrismaClient({ adapter });
