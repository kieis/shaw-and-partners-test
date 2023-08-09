import { FastifyReply } from "fastify";
import { ResponseData } from "./types";

export function handleError(reply: FastifyReply, error: ResponseData) {
  return reply.status(error.STATUS_CODE).send(error.MESSAGE);
}
