import { RouteHandler } from "fastify";

export const getCategories: RouteHandler = async (req, reply) => {
  try {
    const categories = await req.server.prisma.category.findMany();
    return categories;
  } catch (error) {
    return reply.code(500).send(error);
  }
};
