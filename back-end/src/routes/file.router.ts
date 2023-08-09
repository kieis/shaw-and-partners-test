import { FastifyInstance } from "fastify";
import { file as fileController } from "../controllers";
import { createFileSchema } from "../schemas";
import { multerUpload, verifyToken } from "../middleware";

export async function fileRouter(fastify: FastifyInstance) {
    fastify.route({
        method: "POST",
        url: "/",
        preHandler: [verifyToken, multerUpload.single("file")],
        schema: createFileSchema,
        handler: fileController.create
    })
}