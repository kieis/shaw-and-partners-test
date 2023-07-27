import { FastifyReply } from "fastify";
import { IResponseData } from "./types";

export function handleError(reply: FastifyReply, error: IResponseData) {
    return reply.status(error.STATUS_CODE).send(error.MESSAGE);
  }