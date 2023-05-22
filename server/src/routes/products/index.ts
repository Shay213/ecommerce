import { FastifyInstance } from "fastify";
import { getProductsSchema } from "./schemas";
import { getProducts } from "./handlers";

export default async (fastify: FastifyInstance) => {
  fastify.get("/", { schema: getProductsSchema }, getProducts);
};
