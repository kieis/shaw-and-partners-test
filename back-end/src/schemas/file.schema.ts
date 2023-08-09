import S from "fluent-json-schema";

export const createFileSchema = {
  queryString: S.object(),
  params: S.object(),
  headers: S.object().prop("authorization", S.string().required()),
};
