import { FastifyInstance } from "fastify";
import { file as fileController } from "../controllers";

export async function fileRouter(fastify: FastifyInstance) {
    fastify.route({
        method: "POST",
        url: "/",
        schema: {},
        handler: fileController.create
    })
}