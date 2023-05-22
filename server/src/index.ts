import Fastify from "fastify";
import { config } from "dotenv";
config();
import fastifyCors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import path from "path";

// plugins
import prismaPlugin from "./plugins/prisma";

const fastify = Fastify({ logger: true });
fastify.register(fastifyCors, {
  origin: process.env.CLIENT_URL,
  credentials: true,
});
fastify.register(fastifyStatic, {
  root: path.join(process.cwd(), "/public/images"),
  prefix: "/api/images",
});

// plugins
fastify.register(prismaPlugin);

const start = async () => {
  try {
    await fastify.listen({ port: +(process.env.PORT || 3000) });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
