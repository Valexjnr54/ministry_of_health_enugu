/*
  Warnings:

  - Added the required column `address` to the `inspector` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `inspector` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "inspector" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "phone_number" TEXT NOT NULL;
