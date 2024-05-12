/*
  Warnings:

  - A unique constraint covering the columns `[cac]` on the table `facility` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "facility_cac_key" ON "facility"("cac");
