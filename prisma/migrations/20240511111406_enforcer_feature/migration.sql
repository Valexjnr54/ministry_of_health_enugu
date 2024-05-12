-- CreateTable
CREATE TABLE "enforcer" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'Enforcer',
    "lga" TEXT,
    "profile_image" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "reset_password_token" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "enforcer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "enforcer_username_key" ON "enforcer"("username");

-- CreateIndex
CREATE UNIQUE INDEX "enforcer_email_key" ON "enforcer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "enforcer_reset_password_token_key" ON "enforcer"("reset_password_token");
