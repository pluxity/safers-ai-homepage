-- DropIndex
DROP INDEX "inquiries_status_created_at_idx";

-- DropIndex
DROP INDEX "posts_locale_status_published_at_idx";

-- CreateIndex
CREATE INDEX "inquiries_status_created_at_id_idx" ON "inquiries"("status", "created_at" DESC, "id" DESC);

-- CreateIndex
CREATE INDEX "posts_locale_status_published_at_id_idx" ON "posts"("locale", "status", "published_at" DESC, "id" DESC);
