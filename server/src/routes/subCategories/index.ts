import { FastifyInstance } from "fastify";
import { getSubCategoriesSchema } from "./schemas";
import { getSubCategories } from "./handlers";

export default async (fastify: FastifyInstance) => {
  fastify.get(
    "/:categoryId",
    { schema: getSubCategoriesSchema },
    getSubCategories
  );
};
