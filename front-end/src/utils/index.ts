import { CardDataProps } from "@/components/Card";

export const formatFetchedData = (data: any) => {
  return {
    data: data.content,
    columns: Object.keys(data.content[0] as object),
  } as CardDataProps;
};
