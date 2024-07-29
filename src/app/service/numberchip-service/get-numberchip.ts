import { httpClient } from "../https-client";

interface IDataNumberchip {
  page: number;
  filter: number | string;
  size: number;
  active: number;
}

export async function getDataNumberchip({
  filter,
  page,
  size,
  active,
}: IDataNumberchip) {
  // const pageIndex = page * size
  // const pageSize = (page + 1) * size
  console.log("req");
  const { data } = await httpClient.get(
    `/numberchip/findAny?search=${filter}&page=${page}&limit=${size}&active=${active}`
  );
  return data[0].data;
}
