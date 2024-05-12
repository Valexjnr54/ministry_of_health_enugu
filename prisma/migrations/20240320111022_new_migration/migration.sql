/*
  Warnings:

  - Added the required column `state_id` to the `local_government` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "local_government" ADD COLUMN     "state_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "state" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "state_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "local_government" ADD CONSTRAINT "local_government_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "state"("id") ON DELETE CASCADE ON UPDATE CASCADE;
