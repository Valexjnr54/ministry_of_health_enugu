-- CreateTable
CREATE TABLE "food_handlers" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "enugu_handler_id" TEXT NOT NULL,
    "nin" TEXT NOT NULL,
    "nin_image" TEXT,
    "lga" TEXT,
    "state" TEXT,
    "expiry_date" TEXT NOT NULL,
    "nin_status" "Status" NOT NULL DEFAULT 'Pending',
    "status" "Status" NOT NULL DEFAULT 'Pending',
    "passport" TEXT,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "food_handlers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food_facility" (
    "id" SERIAL NOT NULL,
    "facility_name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "cac" TEXT NOT NULL,
    "cac_image" TEXT,
    "owner_name" TEXT NOT NULL,
    "owner_phone_number" TEXT NOT NULL,
    "owner_contact_address" TEXT NOT NULL,
    "owner_nin" TEXT NOT NULL,
    "owner_nin_image" TEXT,
    "owner_email" TEXT NOT NULL,
    "lga" TEXT,
    "landmark" TEXT,
    "source_of_water" TEXT NOT NULL,
    "method_of_disposal" TEXT NOT NULL,
    "facility_personnel_count" JSONB,
    "expiry_date" TEXT,
    "enugu_food_facility_id" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "current_reference" TEXT,
    "password" TEXT,
    "cac_status" "Status" NOT NULL,
    "status" "Status" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "food_facility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food_facility_personnel" (
    "id" SERIAL NOT NULL,
    "food_facility_id" INTEGER NOT NULL,
    "food_handler_id" INTEGER NOT NULL,
    "eenugu_handler_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "food_facility_personnel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "food_handlers_email_key" ON "food_handlers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "food_handlers_phone_number_key" ON "food_handlers"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "food_handlers_enugu_handler_id_key" ON "food_handlers"("enugu_handler_id");

-- CreateIndex
CREATE UNIQUE INDEX "food_handlers_nin_key" ON "food_handlers"("nin");

-- CreateIndex
CREATE UNIQUE INDEX "food_facility_enugu_food_facility_id_key" ON "food_facility"("enugu_food_facility_id");

-- CreateIndex
CREATE UNIQUE INDEX "food_facility_reference_key" ON "food_facility"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "food_facility_current_reference_key" ON "food_facility"("current_reference");

-- AddForeignKey
ALTER TABLE "food_facility_personnel" ADD CONSTRAINT "food_facility_personnel_food_facility_id_fkey" FOREIGN KEY ("food_facility_id") REFERENCES "food_facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_facility_personnel" ADD CONSTRAINT "food_facility_personnel_food_handler_id_fkey" FOREIGN KEY ("food_handler_id") REFERENCES "food_handlers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
