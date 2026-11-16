/*
  Warnings:

  - You are about to drop the column `subject` on the `inquiries` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `inquiries` table. All the data in the column will be lost.
  - Added the required column `cctv_env` to the `inquiries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `site_count` to the `inquiries` table without a default value. This is not possible if the table is not empty.
  - Made the column `company` on table `inquiries` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "inquiry_service" AS ENUM ('PLATFORM', 'AI_SAFETY_BLACKBOX', 'AI_CONVERSATIONAL', 'AI_HEALTH', 'CCTV_MONITORING', 'HEAVY_EQUIPMENT', 'PARTNERSHIP');

-- CreateEnum
CREATE TYPE "site_count" AS ENUM ('ONE', 'TWO_TO_FIVE', 'SIX_OR_MORE', 'UNDECIDED');

-- CreateEnum
CREATE TYPE "cctv_env" AS ENUM ('EXISTING', 'NEW', 'UNDECIDED');

-- AlterTable
ALTER TABLE "inquiries" DROP COLUMN "subject",
DROP COLUMN "type",
ADD COLUMN     "cctv_env" "cctv_env" NOT NULL,
ADD COLUMN     "services" "inquiry_service"[],
ADD COLUMN     "site_count" "site_count" NOT NULL,
ALTER COLUMN "company" SET NOT NULL,
ALTER COLUMN "message" DROP NOT NULL;

-- DropEnum
DROP TYPE "inquiry_type";
