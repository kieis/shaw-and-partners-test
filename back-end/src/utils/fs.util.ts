import { parse } from "csv-parse";
import { createReadStream, unlinkSync } from "fs";

export const readCSV = (path: string): Promise<string[][]> => {
  return new Promise((resolve, reject) => {
    const data: string[][] = [];

    createReadStream(path)
      .pipe(parse({ delimiter: ",", from_line: 1 }))
      .on("data", (row) => {
        data.push(row);
      })
      .on("end", () => {
        resolve(data);
      })
      .on("error", (err) => {
        reject(err);
      });

    return data;
  });
};

export const mountCsvWithColumns = (csv: string[][]) => {
  const columns = csv[0];
  return csv
    .filter((n, idx) => idx !== 0)
    .map((data) => {
      let temp = {};
      columns.forEach((column, idx) => {
        temp = {
          ...temp,
          [column]: data[idx],
        };
      });
      return temp;
    });
};

export const remove = (file: string) => {
  return unlinkSync(file);
};
