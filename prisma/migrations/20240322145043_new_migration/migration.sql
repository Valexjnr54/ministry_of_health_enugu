/*
  Warnings:

  - A unique constraint covering the columns `[facility_id]` on the table `inspection_review` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "inspection_review_facility_id_key" ON "inspection_review"("facility_id");
