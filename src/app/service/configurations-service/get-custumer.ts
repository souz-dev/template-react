import { httpClient } from "../https-client";

interface IDataUser {
  page: number;
  filter: number | string;
  size: number;
}

export async function getDataCustumer({ filter, page, size }: IDataUser) {
  const { data } = await httpClient.get(
    `/customer/findAny?search=${filter}&page=${page}&limit=${size}`
  );
  return data[0].data;
}
