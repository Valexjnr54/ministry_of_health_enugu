-- AlterTable
ALTER TABLE "facility" ADD COLUMN     "owner_passport" TEXT;

-- AddForeignKey
ALTER TABLE "facility" ADD CONSTRAINT "facility_assigned_inspector_fkey" FOREIGN KEY ("assigned_inspector") REFERENCES "inspector"("id") ON DELETE CASCADE ON UPDATE CASCADE;
