import { RouteHandler } from "fastify";

export const getProducts: RouteHandler = async (req, reply) => {
  try {
    const products = await req.server.prisma.product.findMany();
    return reply.code(200).send(products);
  } catch (error) {
    return reply.code(500).send(error);
  }
};
