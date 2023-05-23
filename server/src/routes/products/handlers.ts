import { RouteHandler } from "fastify";
import {
  GetFilteredProductsParams,
  GetFilteredProductsQuerystring,
  GetProductsQuerystring,
} from "./schemas";

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

export const getFilteredProducts: RouteHandler<{
  Params: GetFilteredProductsParams;
  Querystring: GetFilteredProductsQuerystring;
}> = async (req, reply) => {
  const { categoryId } = req.params;
  const { maxPrice, sort, subCats } = req.query;
  try {
    const products = await req.server.prisma.product.findMany({
      where: {
        categories: { some: { id: categoryId } },
        price: { lte: maxPrice },
        ...(subCats && {
          subCategories: {
            some: { id: { in: JSON.parse(decodeURIComponent(subCats)) } },
          },
        }),
      },
      ...(sort && { orderBy: { price: sort === "asc" ? "asc" : "desc" } }),
    });
    return reply.code(200).send(products);
  } catch (error) {
    return reply.code(500).send(error);
  }
};
