import S from "fluent-json-schema";

export const findUserSchema = {
  queryString: S.object().prop("q", S.string()),
  params: S.object(),
  headers: S.object().prop("authorization", S.string().required()),
};
