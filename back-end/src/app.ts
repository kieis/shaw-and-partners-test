import fastify from "fastify";
import "dotenv/config";
import { fileRouter } from "./routes";
import prisma from "./services/prisma";

const server = fastify();

server.get("/", (request, reply) => {
  reply.send("Server Running");
});

server.register(fileRouter, { prefix: "/api/files" });

server.listen({ port: Number(process.env.PORT || "3000") }, (err, address) => {
  if (err) {
    prisma.$disconnect();
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
