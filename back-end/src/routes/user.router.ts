import { FastifyInstance } from "fastify";
import { user as userController } from "../controllers";
import { verifyToken } from "../middleware";
import { findUserSchema } from "../schemas";

export async function userRouter(fastify: FastifyInstance) {
    fastify.route({
        method: "GET",
        url: "/",
        preHandler: [verifyToken],
        schema: findUserSchema,
        handler: userController.find
    })
}