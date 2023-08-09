export type ResponseDefaultKeys = "CREATED" | "SUCCESS" | "NO_CONTENT";

export type ResponseErrorKeys =
  | "ERROR_400"
  | "ERROR_401"
  | "ERROR_403"
  | "ERROR_404"
  | "ERROR_409"
  | "ERROR_500";

export type ResponseData = {
  STATUS_CODE: number;
  MESSAGE: undefined | string;
};

export type ResponseError = {
    [s in ResponseErrorKeys]: ResponseData;
  };

export type Response = {
  [s in ResponseDefaultKeys | ResponseErrorKeys]: ResponseData;
};
