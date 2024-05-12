-- CreateTable
CREATE TABLE "inspection_review" (
    "id" SERIAL NOT NULL,
    "facility_id" INTEGER NOT NULL,
    "cac" BOOLEAN NOT NULL,
    "owner_nin" BOOLEAN NOT NULL,
    "services_offered" BOOLEAN NOT NULL,
    "number_of_bed" BOOLEAN NOT NULL,
    "source_of_water" BOOLEAN NOT NULL,
    "method_of_disposal" BOOLEAN NOT NULL,
    "site_plan" BOOLEAN NOT NULL,
    "building_plan" BOOLEAN NOT NULL,
    "compliance_certificate" BOOLEAN NOT NULL,
    "tax_clearance_certificate" BOOLEAN NOT NULL,
    "facility_personnel_count" BOOLEAN NOT NULL,
    "facility_personnel" BOOLEAN NOT NULL,
    "review" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "inspection_review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "inspection_review" ADD CONSTRAINT "inspection_review_facility_id_fkey" FOREIGN KEY ("facility_id") REFERENCES "facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;
