/*
  Warnings:

  - You are about to drop the column `create_facility_payment_reference` on the `facility` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[current_reference]` on the table `facility` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "facility_create_facility_payment_reference_key";

-- AlterTable
ALTER TABLE "facility" DROP COLUMN "create_facility_payment_reference",
ADD COLUMN     "current_reference" TEXT;

-- CreateTable
CREATE TABLE "facility_complete_payment" (
    "id" SERIAL NOT NULL,
    "facility_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "facility_complete_payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "facility_complete_payment_reference_key" ON "facility_complete_payment"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "facility_current_reference_key" ON "facility"("current_reference");
