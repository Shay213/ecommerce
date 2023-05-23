import { FastifySchema } from "fastify";
import { FromSchema } from "json-schema-to-ts";

const product = {
  type: "object",
  properties: {
    id: { type: "string" },
    quantity: { type: "number" },
  },
  required: ["id", "quantity"],
  additionalProperties: true,
} as const;

const makePaymentBody = {
  type: "object",
  properties: {
    products: {
      type: "array",
      items: product,
    },
  },
  required: ["products"],
} as const;

export type MakePaymentBody = FromSchema<typeof makePaymentBody>;

export const makePaymentSchema: FastifySchema = {
  body: makePaymentBody,
};
