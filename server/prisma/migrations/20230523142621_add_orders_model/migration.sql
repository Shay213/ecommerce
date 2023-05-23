-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "stripe_id" TEXT NOT NULL,
    "products" JSONB NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);
