/*
  Warnings:

  - You are about to drop the column `eenugu_handler_id` on the `food_facility_personnel` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `food_facility_personnel` table. All the data in the column will be lost.
  - Added the required column `enugu_handler_id` to the `food_facility_personnel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "food_facility_personnel" DROP COLUMN "eenugu_handler_id",
DROP COLUMN "type",
ADD COLUMN     "enugu_handler_id" TEXT NOT NULL;
