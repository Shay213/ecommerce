import { FastifyInstance } from "fastify";
import { makePayment } from "./handlers";
import { makePaymentSchema } from "./schemas";

export default async (fastify: FastifyInstance) => {
  fastify.post("/", { schema: makePaymentSchema }, makePayment);
};
