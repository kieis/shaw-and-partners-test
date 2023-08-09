import { Prisma } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { RESPONSE } from "../helpers/constants";
import { handleError } from "../helpers/errors";
import { MultipartFileData } from "../helpers/types";
import prisma from "../services/prisma";
import { fs, token } from "../utils";

export const create = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { authorization } = request["headers"];
    if (!authorization) {
      return handleError(reply, RESPONSE.ERROR_401);
    }
    const bearerToken = token.fromBearer(authorization);
    const { email } = await token.decode(bearerToken);

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return handleError(reply, RESPONSE.ERROR_403);
    }

    const { path } = (request as any)?.file as MultipartFileData;
    if (!path.includes("uploads")) {
      return handleError(reply, RESPONSE.ERROR_403);
    }

    const mountedData = (fs.mountCsvWithColumns(await fs.readCSV(path))) as Prisma.JsonArray;
    const createdFile = await prisma.file.create({
      data: {
        author: { connect: { id: user.id } },
        content: mountedData
      },
    });

    fs.remove(path);

    if(!createdFile) {
      return handleError(reply, RESPONSE.ERROR_403);
    }

    reply.status(RESPONSE.CREATED.STATUS_CODE).send({ data: createdFile });
  } catch (e) {
    handleError(reply, RESPONSE.ERROR_500);
  }
};
