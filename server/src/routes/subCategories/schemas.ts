import { FastifySchema } from "fastify";
import { FromSchema } from "json-schema-to-ts";

const getSubCategoriesParams = {
  type: "object",
  properties: {
    categoryId: { type: "string" },
  },
} as const;

export type GetSubCategoriesParams = FromSchema<typeof getSubCategoriesParams>;

const subCategory = {
  type: "object",
  properties: {
    id: { type: "string" },
    title: { type: "string", enum: ["hat", "tShirt", "suit"] },
  },
  required: ["id", "title"],
};

const getSubCategoriesSuccessResponse = {
  type: "array",
  items: subCategory,
};

export const getSubCategoriesSchema: FastifySchema = {
  params: getSubCategoriesParams,
  response: {
    200: getSubCategoriesSuccessResponse,
  },
};
