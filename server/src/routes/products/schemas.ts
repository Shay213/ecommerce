import { FastifySchema } from "fastify";
import { FromSchema } from "json-schema-to-ts";

const subCats = {
  enum: ["hat", "tShirt", "suit"],
};

const sort = {
  enum: ["asc", "desc"],
};

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

const getProductsQuerystring = {
  type: "object",
  properties: {
    productType: { type: "string", enum: ["normal", "featured", "trending"] },
  },
} as const;

export type GetProductsQuerystring = FromSchema<typeof getProductsQuerystring>;

const getProductsSuccessReply = {
  type: "array",
  items: product,
};

export const getProductsSchema: FastifySchema = {
  querystring: getProductsQuerystring,
  response: {
    200: getProductsSuccessReply,
  },
};

const getFilteredProductsParams = {
  type: "object",
  properties: {
    categoryId: { type: "string" },
  },
} as const;

export type GetFilteredProductsParams = FromSchema<
  typeof getFilteredProductsParams
>;

const getFilteredProductsQuerystring = {
  type: "object",
  properties: {
    maxPrice: { type: "number" },
    sort: { type: "string", ...sort },
    subCats: { type: "string" },
  },
} as const;

export type GetFilteredProductsQuerystring = FromSchema<
  typeof getFilteredProductsQuerystring
>;

export const getFilteredProductsSchema: FastifySchema = {
  params: getFilteredProductsParams,
  querystring: getFilteredProductsQuerystring,
  response: {
    200: {
      type: "array",
      items: product,
    },
  },
};

const getProductParams = {
  type: "object",
  properties: {
    id: { type: "string" },
  },
  required: ["id"],
} as const;

export type GetProductParams = FromSchema<typeof getProductParams>;

export const getProductSchema: FastifySchema = {
  params: getProductParams,
  response: {
    200: product,
  },
};
