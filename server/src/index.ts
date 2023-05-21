import Fastify from "fastify";
import { config } from "dotenv";
config();

const fastify = Fastify({ logger: true });

console.log("wors");

const start = async () => {
  try {
    await fastify.listen({ port: +(process.env.PORT || 3000) });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
