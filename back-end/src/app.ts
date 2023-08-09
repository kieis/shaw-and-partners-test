import "dotenv/config";
import fastify from "fastify";
import { API_PATH } from "./helpers/constants";
import { multerContentParser } from "./middleware";
import { fileRouter, userRouter } from "./routes";
import prisma from "./services/prisma";
import cors from '@fastify/cors'

const server = fastify();
server.register(cors, {
  origin: true //accepting all
})

server.register(multerContentParser);

server.get("/", (request, reply) => {
  reply.send("Server Running");
});

server.register(fileRouter, {
  prefix: API_PATH + "files",
});

server.register(userRouter, {
  prefix: API_PATH + "users",
});

server.listen({ port: Number(process.env.PORT || "3000") }, (err, address) => {
  if (err) {
    prisma.$disconnect();
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
