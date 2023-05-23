import Fastify from "fastify";
import { config } from "dotenv";
config();
import fastifyCors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import path from "path";

// plugins
import prismaPlugin from "./plugins/prisma";

// routes
import products from "./routes/products";
import categories from "./routes/categories";
import subCategories from "./routes/subCategories";

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

// routes
fastify.register(products, { prefix: "/api/products" });
fastify.register(categories, { prefix: "/api/categories" });
fastify.register(subCategories, { prefix: "/api/sub-categories" });

/*async function main() {
  await fastify.register(prismaPlugin);
  await fastify.prisma.category.create({
    data: {
      title: "accessories",
      desc: "accessories description",
      img: "img4.jpg",
    },
  });
}

main()
  .then(async () => {
    await fastify.prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await fastify.prisma.$disconnect();
    process.exit(1);
  });*/

const start = async () => {
  try {
    await fastify.listen({ port: +(process.env.PORT || 3000) });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
