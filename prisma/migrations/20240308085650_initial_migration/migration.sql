-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Pending', 'Rejected', 'Approved', 'Inactive', 'Active', 'Suspend', 'Verified');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('User', 'Inspector', 'Admin');

-- CreateEnum
CREATE TYPE "Type" AS ENUM ('Doctor', 'Nurse', 'Pharmacist', 'Radiographer', 'Mid_wife', 'Dentist', 'Lab_Scientist', 'Optometrist', 'Physiotherapist', 'Psychiatrist', 'Community_health_worker', 'Emergency_medical_technician');

-- CreateEnum
CREATE TYPE "Facility_Type" AS ENUM ('Specialist_hospital', 'Specialist_eye_hospital', 'Specialist_clinic', 'General_hospital', 'Outpatient_medical_clinic', 'Maternity_home', 'Grade_1_medical_lab', 'Grade_2_medical_lab', 'Grade_3_medical_lab', 'Grade_4_medical_lab', 'Dental_center', 'Dental_clinic', 'Eye_clinic', 'Eye_center', 'Xray_center', 'Physiotherapy_center', 'Radiotherapy_center', 'Mortuary', 'Ultrasound');

-- CreateEnum
CREATE TYPE "Sector" AS ENUM ('Private_sector_non_profit', 'Private_sector_profit', 'Federal_government_agency', 'State_government_agency', 'Local_government_agency');

-- CreateEnum
CREATE TYPE "Level" AS ENUM ('Primary', 'Secondary', 'Tertiary');

-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'Admin',
    "profile_image" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inspector" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'Inspector',
    "profile_image" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "inspector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "type" "Type" NOT NULL,
    "practice_id" TEXT NOT NULL,
    "enugu_practice_id" TEXT NOT NULL,
    "specialization" TEXT,
    "nin" TEXT NOT NULL,
    "expiry_date" TEXT NOT NULL,
    "nin_status" "Status" NOT NULL DEFAULT 'Pending',
    "practice_id_status" "Status" NOT NULL DEFAULT 'Pending',
    "status" "Status" NOT NULL DEFAULT 'Pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personnel_payment" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "has_registered" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "personnel_payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facility_payment" (
    "id" SERIAL NOT NULL,
    "facility_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "has_registered" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "facility_payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "revokedToken" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "revokedToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facility" (
    "id" SERIAL NOT NULL,
    "facility_name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "cac" TEXT NOT NULL,
    "owner_name" TEXT NOT NULL,
    "owner_phone_number" TEXT NOT NULL,
    "owner_contact_address" TEXT NOT NULL,
    "owner_nin" TEXT NOT NULL,
    "owner_email" TEXT NOT NULL,
    "facility_sector" "Sector" NOT NULL,
    "facility_type" "Facility_Type" NOT NULL,
    "facility_registration_number" TEXT NOT NULL,
    "date_of_certification" TEXT NOT NULL,
    "facility_level" "Level" NOT NULL,
    "services_offered" JSONB NOT NULL,
    "number_of_bed" INTEGER NOT NULL,
    "source_of_water" TEXT NOT NULL,
    "method_of_disposal" TEXT NOT NULL,
    "site_plan" TEXT NOT NULL,
    "building_plan" TEXT NOT NULL,
    "tax_clearance_certificate" TEXT NOT NULL,
    "compliance_certificate" TEXT,
    "facility_personnel_count" JSONB,
    "expiry_date" TEXT,
    "enugu_facility_id" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "create_facility_payment_reference" TEXT,
    "cac_status" "Status" NOT NULL,
    "status" "Status" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "facility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facility_personnel" (
    "id" SERIAL NOT NULL,
    "facility_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "enugu_practice_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "facility_personnel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_username_key" ON "admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "inspector_username_key" ON "inspector"("username");

-- CreateIndex
CREATE UNIQUE INDEX "inspector_email_key" ON "inspector"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_number_key" ON "users"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "users_practice_id_key" ON "users"("practice_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_enugu_practice_id_key" ON "users"("enugu_practice_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_nin_key" ON "users"("nin");

-- CreateIndex
CREATE UNIQUE INDEX "personnel_payment_reference_key" ON "personnel_payment"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "facility_payment_reference_key" ON "facility_payment"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "revokedToken_token_key" ON "revokedToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "facility_enugu_facility_id_key" ON "facility"("enugu_facility_id");

-- CreateIndex
CREATE UNIQUE INDEX "facility_reference_key" ON "facility"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "facility_create_facility_payment_reference_key" ON "facility"("create_facility_payment_reference");

-- AddForeignKey
ALTER TABLE "facility_personnel" ADD CONSTRAINT "facility_personnel_facility_id_fkey" FOREIGN KEY ("facility_id") REFERENCES "facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facility_personnel" ADD CONSTRAINT "facility_personnel_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
