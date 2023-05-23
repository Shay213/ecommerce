import { FastifyInstance } from "fastify";
import {
  getProductsSchema,
  getFilteredProductsSchema,
  getProductSchema,
} from "./schemas";
import { getProducts, getFilteredProducts, getProduct } from "./handlers";

export default async (fastify: FastifyInstance) => {
  fastify.get("/", { schema: getProductsSchema }, getProducts);
  fastify.get(
    "/:categoryId",
    { schema: getFilteredProductsSchema },
    getFilteredProducts
  );
  fastify.get("/single/:id", { schema: getProductSchema }, getProduct);
};
