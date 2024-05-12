/*
  Warnings:

  - A unique constraint covering the columns `[reset_password_token]` on the table `admin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[reset_password_token]` on the table `facility` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[reset_password_token]` on the table `food_facility` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[reset_password_token]` on the table `food_handlers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[reset_password_token]` on the table `inspector` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[reset_password_token]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "admin_reset_password_token_key" ON "admin"("reset_password_token");

-- CreateIndex
CREATE UNIQUE INDEX "facility_reset_password_token_key" ON "facility"("reset_password_token");

-- CreateIndex
CREATE UNIQUE INDEX "food_facility_reset_password_token_key" ON "food_facility"("reset_password_token");

-- CreateIndex
CREATE UNIQUE INDEX "food_handlers_reset_password_token_key" ON "food_handlers"("reset_password_token");

-- CreateIndex
CREATE UNIQUE INDEX "inspector_reset_password_token_key" ON "inspector"("reset_password_token");

-- CreateIndex
CREATE UNIQUE INDEX "users_reset_password_token_key" ON "users"("reset_password_token");
