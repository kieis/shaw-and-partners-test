export type IResponse = {
  [s in
    | "CREATED"
    | "SUCCESS"
    | "NO_CONTENT"
    | "ERROR_400"
    | "ERROR_401"
    | "ERROR_403"
    | "ERROR_404"
    | "ERROR_409"
    | "ERROR_500"]: IResponseData;
};

export interface IResponseData {
  STATUS_CODE: number;
  MESSAGE: undefined | string;
}
