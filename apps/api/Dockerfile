FROM node:24-alpine

WORKDIR /app
RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.base.json ./
COPY packages/shared packages/shared
COPY apps/api apps/api

RUN pnpm install --frozen-lockfile --filter @safers-ai/api...

WORKDIR /app/apps/api
RUN pnpm exec prisma generate --config prisma7.config.ts

CMD ["sh", "-c", "pnpm exec prisma migrate deploy --config prisma7.config.ts && exec node --import tsx src/index.ts"]