import { FastifyReply, FastifyRequest } from "fastify";
import { RESPONSE } from "../helpers/constants";
import prisma from "../services/prisma";
import { handleError } from "../helpers/errors";

export const create = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        //const { file } = request["body"];
        const users = await prisma.user.findMany({});
        reply.status(RESPONSE.SUCCESS.STATUS_CODE).send({ data: { users } })
    }catch(e) {
        handleError(reply, RESPONSE.ERROR_500);
    }
}