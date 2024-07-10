import { IUser } from "@/app/entities/user";
import { httpClient } from "../https-client";

export interface ISignInParams {
  login: string;
  senha: string;
  captcha: string;
}

interface ISignInResponse {
  user: IUser;
  token: string;
}

export async function signIn(params: ISignInParams) {
  const { data } = await httpClient.post<ISignInResponse>(
    "/auth/login",
    params
  );

  return data;
}
