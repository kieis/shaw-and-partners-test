import { FastifyRequest, FastifyReply } from "fastify";
import { handleError } from "../helpers/errors";
import { RESPONSE } from "../helpers/constants";
import jwt from "jsonwebtoken";
import { token } from "../utils";

export const verifyToken = (
  request: FastifyRequest,
  reply: FastifyReply,
  next: () => void
) => {
  try {
    const { authorization } = request["headers"];
    if (!authorization) {
      return handleError(reply, RESPONSE.ERROR_401);
    }

    const bearerToken = token.fromBearer(authorization);

    jwt.verify(bearerToken, `${process.env.JWT_SECRET_KEY}`, (err, decoded) => {
      if (err) {
        return handleError(reply, RESPONSE.ERROR_403);
      }
      next();
    });
  } catch (e) {
    handleError(reply, RESPONSE.ERROR_500);
  }
};
