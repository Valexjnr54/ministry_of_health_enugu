/*
  Warnings:

  - The `assigned_inspector` column on the `facility` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "facility" DROP COLUMN "assigned_inspector",
ADD COLUMN     "assigned_inspector" INTEGER;
