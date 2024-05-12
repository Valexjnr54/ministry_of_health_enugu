-- AlterTable
ALTER TABLE "facility" ADD COLUMN     "lga" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "lga" TEXT;

-- CreateTable
CREATE TABLE "local_government" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "local_government_pkey" PRIMARY KEY ("id")
);
