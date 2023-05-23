import { FastifyInstance } from "fastify";
import { getProductsSchema, getFilteredProductsSchema } from "./schemas";
import { getProducts, getFilteredProducts } from "./handlers";

export default async (fastify: FastifyInstance) => {
  fastify.get("/", { schema: getProductsSchema }, getProducts);
  fastify.get(
    "/:categoryId",
    { schema: getFilteredProductsSchema },
    getFilteredProducts
  );
};
