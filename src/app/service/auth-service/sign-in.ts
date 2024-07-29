import { IUserRespoonse } from "@/app/entities/user";
import { httpClient } from "../https-client";

export interface ISignInParams {
  login: string;
  password: string;
}

export interface ISignInResponse {
  user: IUserRespoonse;
  token: string;
}

export async function signIn(params: ISignInParams) {
  const { data } = await httpClient.post<ISignInResponse>(
    "/auth/login",
    params
  );

  console.log({ data });
  return data;
}
