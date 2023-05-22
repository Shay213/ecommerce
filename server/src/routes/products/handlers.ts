import { RouteHandler } from "fastify";
import { GetProductsQuerystring } from "./schemas";

export const getProducts: RouteHandler<{
  Querystring: GetProductsQuerystring;
}> = async (req, reply) => {
  const { productType } = req.query;
  console.log(productType);
  try {
    const products = await req.server.prisma.product.findMany({
      where: {
        productType: { equals: productType },
      },
    });
    return reply.code(200).send(products);
  } catch (error) {
    return reply.code(500).send(error);
  }
};
