import { z } from "zod";

// 서버에 필요한 환경변수 목록과 규칙
const EnvSchema = z.object({
  PORT: z.coerce.number().int().positive().default(4000),
  DATABASE_URL: z.string().min(1),
  ADMIN_PASSWORD: z.string().min(1),
  JWT_SECRET: z.string().min(1)
});

const parsed = EnvSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("환경변수 설정 오류:\n" + z.prettifyError(parsed.error));
  process.exit(1);
}

export const env = parsed.data;
