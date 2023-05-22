-- CreateEnum
CREATE TYPE "product_type" AS ENUM ('normal', 'featured', 'trending');

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "product_type" "product_type" NOT NULL DEFAULT 'normal';
