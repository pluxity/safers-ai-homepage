-- CreateEnum
CREATE TYPE "locale" AS ENUM ('KO', 'EN');

-- CreateEnum
CREATE TYPE "post_category" AS ENUM ('COMPANY', 'SAFERS', 'NOTICE');

-- CreateEnum
CREATE TYPE "post_status" AS ENUM ('DRAFT', 'PUBLISHED');

-- CreateEnum
CREATE TYPE "inquiry_type" AS ENUM ('DEMO', 'PRODUCT', 'PARTNERSHIP', 'ETC');

-- CreateEnum
CREATE TYPE "inquiry_status" AS ENUM ('NEW', 'DONE', 'SPAM');

-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "locale" "locale" NOT NULL DEFAULT 'KO',
    "category" "post_category" NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "summary" VARCHAR(300) NOT NULL,
    "body_html" TEXT NOT NULL,
    "thumbnail_path" VARCHAR(300),
    "source_url" VARCHAR(500),
    "status" "post_status" NOT NULL DEFAULT 'DRAFT',
    "published_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inquiries" (
    "id" SERIAL NOT NULL,
    "locale" "locale" NOT NULL DEFAULT 'KO',
    "type" "inquiry_type" NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "phone" VARCHAR(30) NOT NULL,
    "company" VARCHAR(100),
    "subject" VARCHAR(200) NOT NULL,
    "message" TEXT NOT NULL,
    "privacy_agreed_at" TIMESTAMPTZ NOT NULL,
    "marketing_agreed" BOOLEAN NOT NULL DEFAULT false,
    "status" "inquiry_status" NOT NULL DEFAULT 'NEW',
    "memo" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "inquiries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "posts_locale_status_published_at_idx" ON "posts"("locale", "status", "published_at" DESC);

-- CreateIndex
CREATE INDEX "inquiries_status_created_at_idx" ON "inquiries"("status", "created_at" DESC);
