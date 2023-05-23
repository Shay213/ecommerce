import { RouteHandler } from "fastify";
import { GetSubCategoriesParams } from "./schemas";

export const getSubCategories: RouteHandler<{
  Params: GetSubCategoriesParams;
}> = async (req, reply) => {
  const { categoryId } = req.params;
  try {
    const subCategories = await req.server.prisma.subCategory.findMany({
      where: {
        categories: { some: { id: { equals: categoryId } } },
      },
    });
    return reply.code(200).send(subCategories);
  } catch (error) {
    return reply.code(500).send(error);
  }
};
