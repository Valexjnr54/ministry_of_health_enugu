-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Three_star_hotel', 'Regular', 'Motel', 'Fine_dining', 'Casual_dining', 'Cafes_and_Bistros', 'Buffet', 'Fast_food');

-- AlterTable
ALTER TABLE "food_facility" ADD COLUMN     "category" "Category";
