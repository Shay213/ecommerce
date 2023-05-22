import { FastifySchema } from "fastify";
import { FromSchema } from "json-schema-to-ts";

const product = {
  type: "object",
  properties: {
    id: { type: "string" },
    title: { type: "string" },
    desc: { type: "string" },
    img1: { type: "string" },
    img2: { type: "string" },
    productType: {
      type: "string",
      enum: ["normal", "featured", "trending"],
    },
    price: { type: "number" },
    isNew: { type: "boolean" },
  },
  required: [
    "id",
    "title",
    "desc",
    "img1",
    "img2",
    "productType",
    "price",
    "isNew",
  ],
};

const getProductsSuccessReply = {
  type: "array",
  items: product,
};

export const getProductsSchema: FastifySchema = {
  response: {
    200: getProductsSuccessReply,
  },
};
