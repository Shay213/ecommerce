import { RouteHandler } from "fastify";
import Stripe from "stripe";
import { MakePaymentBody } from "./schemas";
import { Decimal } from "decimal.js";

const STRIPE_KEY = process.env.STRIPE_KEY;
const CLIENT_URL = process.env.CLIENT_URL;

if (!STRIPE_KEY) throw new Error("Stripe key not defined");
if (!CLIENT_URL) throw new Error("Redirect url not specified");

const stripe = new Stripe(STRIPE_KEY, {
  apiVersion: "2022-11-15",
});

export const makePayment: RouteHandler<{ Body: MakePaymentBody }> = async (
  req,
  reply
) => {
  const { products } = req.body;

  try {
    const lineItems = await Promise.all(
      products.map(async (product) => {
        const item = await req.server.prisma.product.findUnique({
          where: { id: product.id },
        });
        if (!item) return reply.code(404).send("Product not found!");
        const decimalVal = new Decimal(item.price);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item?.title,
            },
            unit_amount: decimalVal.toNumber() * 100,
          },
          quantity: product.quantity,
        };
      })
    );

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${CLIENT_URL}?success=true`,
      cancel_url: `${CLIENT_URL}?canceled=true`,
      shipping_address_collection: { allowed_countries: ["US", "CA"] },
      payment_method_types: ["card"],
    });
    const jsonProducts = JSON.stringify(products);
    await req.server.prisma.order.create({
      data: {
        products: jsonProducts,
        stripeId: session.id,
      },
    });
    return reply.code(200).send({ stripeSession: session });
  } catch (error) {
    return reply.code(500).send(error);
  }
};
