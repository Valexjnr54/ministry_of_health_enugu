-- AlterTable
ALTER TABLE "facility" ADD COLUMN     "owner_gender" TEXT,
ADD COLUMN     "personnel_incharge" TEXT,
ADD COLUMN     "personnel_incharge_name" TEXT,
ADD COLUMN     "personnel_incharge_practice_id" TEXT,
ADD COLUMN     "supervising_doctor_name" TEXT,
ADD COLUMN     "supervising_doctor_practice_id" TEXT,
ALTER COLUMN "services_offered" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "food_handlers" ADD COLUMN     "gender" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "gender" TEXT;
