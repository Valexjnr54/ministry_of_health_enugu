-- AlterTable
ALTER TABLE "facility" ADD COLUMN     "certificate_url" TEXT;

-- AlterTable
ALTER TABLE "food_handlers" ADD COLUMN     "certificate_url" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "certificate_url" TEXT;
