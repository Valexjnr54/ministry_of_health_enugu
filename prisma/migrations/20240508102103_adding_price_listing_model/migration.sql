-- AlterEnum
ALTER TYPE "Type" ADD VALUE 'food_handler';

-- CreateTable
CREATE TABLE "facility_price_list" (
    "id" SERIAL NOT NULL,
    "facility_type" "Facility_Type" NOT NULL,
    "number_of_beds" INTEGER,
    "application_fee" INTEGER NOT NULL,
    "application_fee_charge" INTEGER NOT NULL,
    "first_time_reg" INTEGER NOT NULL,
    "first_time_charge" INTEGER NOT NULL,
    "renewal_fee" INTEGER NOT NULL,
    "renewal_charge" INTEGER NOT NULL,

    CONSTRAINT "facility_price_list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facility_constant_price_list" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "facility_constant_price_list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personnel_price_list" (
    "id" SERIAL NOT NULL,
    "type" "Type" NOT NULL,
    "application_fee" INTEGER NOT NULL,
    "application_charge" INTEGER NOT NULL,
    "enugu_ID_certificate" INTEGER NOT NULL,
    "renewal_fee" INTEGER NOT NULL,
    "renewal_charge" INTEGER NOT NULL,

    CONSTRAINT "personnel_price_list_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "facility_constant_price_list_name_key" ON "facility_constant_price_list"("name");
