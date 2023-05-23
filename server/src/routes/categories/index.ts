import { FastifyInstance } from "fastify";
import { getCategoriesSchema } from "./schemas";
import { getCategories } from "./handlers";

export default async (fastify: FastifyInstance) => {
  fastify.get("/", { schema: getCategoriesSchema }, getCategories);
};
