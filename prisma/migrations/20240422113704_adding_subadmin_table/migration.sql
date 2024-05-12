-- CreateTable
CREATE TABLE "sub_admin" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "lga" TEXT,
    "profile_image" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "reset_password_token" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sub_admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sub_admin_username_key" ON "sub_admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "sub_admin_email_key" ON "sub_admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "sub_admin_reset_password_token_key" ON "sub_admin"("reset_password_token");
