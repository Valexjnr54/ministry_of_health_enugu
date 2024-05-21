/*
  Warnings:

  - You are about to drop the `facility_constant_price_list` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "facility_price_list" ADD COLUMN     "certificate_charge" INTEGER,
ADD COLUMN     "certificate_fee" INTEGER,
ADD COLUMN     "inspection_charge" INTEGER,
ADD COLUMN     "inspection_fee" INTEGER,
ADD COLUMN     "verification_charge" INTEGER,
ADD COLUMN     "verification_fee" INTEGER;

-- DropTable
DROP TABLE "facility_constant_price_list";
