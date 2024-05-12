/*
  Warnings:

  - You are about to drop the column `date_of_certification` on the `facility` table. All the data in the column will be lost.
  - You are about to drop the column `facility_registration_number` on the `facility` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "facility" DROP COLUMN "date_of_certification",
DROP COLUMN "facility_registration_number";
