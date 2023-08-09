import { Response } from "./types";

export const RESPONSE: Response = {
  CREATED: {
    STATUS_CODE: 201,
    MESSAGE: undefined,
  },
  SUCCESS: {
    STATUS_CODE: 200,
    MESSAGE: undefined,
  },
  NO_CONTENT: {
    STATUS_CODE: 204,
    MESSAGE: undefined,
  },
  ERROR_400: {
    STATUS_CODE: 400,
    MESSAGE: "BAD_REQUEST",
  },
  ERROR_401: {
    STATUS_CODE: 401,
    MESSAGE: "UNAUTHORIZED",
  },
  ERROR_403: {
    STATUS_CODE: 403,
    MESSAGE: "FORBIDDEN_ACCESS",
  },
  ERROR_404: {
    STATUS_CODE: 404,
    MESSAGE: "NOT_FOUND",
  },
  ERROR_409: {
    STATUS_CODE: 409,
    MESSAGE: "DUPLICATE_FOUND",
  },
  ERROR_500: {
    STATUS_CODE: 500,
    MESSAGE: "TRY_AGAIN",
  },
};

export const API_PATH = "/api/";
