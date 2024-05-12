-- AlterTable
ALTER TABLE "admin" ADD COLUMN     "reset_password_token" TEXT;

-- AlterTable
ALTER TABLE "facility" ADD COLUMN     "reset_password_token" TEXT;

-- AlterTable
ALTER TABLE "food_facility" ADD COLUMN     "reset_password_token" TEXT;

-- AlterTable
ALTER TABLE "food_handlers" ADD COLUMN     "reset_password_token" TEXT;

-- AlterTable
ALTER TABLE "inspector" ADD COLUMN     "reset_password_token" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "reset_password_token" TEXT;
