import { FastifyReply, FastifyRequest } from "fastify";
import { RESPONSE } from "../helpers/constants";
import { handleError } from "../helpers/errors";
import prisma from "../services/prisma";
import { token } from "../utils";
import { QueryParamsData } from "../helpers/types";

export const find = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { authorization } = request["headers"];
    if (!authorization) {
      return handleError(reply, RESPONSE.ERROR_401);
    }
    const bearerToken = token.fromBearer(authorization);
    const { email } = await token.decode(bearerToken);
    const { q } = request["query"] as QueryParamsData;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        files: true
      }
    });
    if (!user) {
      return handleError(reply, RESPONSE.ERROR_403);
    }

    /*const fileQuery = q?.length ? {
      content: {
        array_contains: "Lolita",
      }
    } : {}

    const files = await prisma.file.findMany({
      where: {
        authorId: user.id,
        content: {
          path: ["0", "1"],
          array_contains: "Lolita",
        }
      }
    })*/

    reply.status(RESPONSE.SUCCESS.STATUS_CODE).send({ data: user });
  } catch (e) {
    console.log(e)
    handleError(reply, RESPONSE.ERROR_500);
  }
};
