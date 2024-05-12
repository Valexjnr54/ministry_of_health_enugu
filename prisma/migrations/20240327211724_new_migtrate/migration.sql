-- AlterTable
ALTER TABLE "facility_complete_payment" ADD COLUMN     "type_of_payment" TEXT;

-- AlterTable
ALTER TABLE "facility_payment" ADD COLUMN     "type_of_payment" TEXT;

-- AlterTable
ALTER TABLE "personnel_payment" ADD COLUMN     "type_of_payment" TEXT;
