import jwt from "jsonwebtoken";

export const decode = (token: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, function (err, decoded) {
      if (err) {
        reject(err);
        return;
      }
      resolve(decoded);
    });
  });
};

export const fromBearer = (bearerToken: string) => {
  const bearer = bearerToken.split(" ");
  return bearer[1];
};
