import { FastifySchema } from "fastify";
const category = {
  type: "object",
  properties: {
    id: { type: "string" },
    title: {
      type: "string",
      enum: ["women", "man", "shoes", "newSeason", "sale", "accessories"],
    },
    desc: { type: "string" },
    img: { type: "string" },
  },
  required: ["id", "title", "desc", "img"],
};

const getCategoriesSuccessReply = {
  type: "array",
  items: category,
};

export const getCategoriesSchema: FastifySchema = {
  response: {
    200: getCategoriesSuccessReply,
  },
};
