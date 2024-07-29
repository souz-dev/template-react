import { ICompany } from "./company";

export interface IUserRespoonse {
  id?: string;
  nome?: string;
  empresas?: ICompany[];
  email?: string;
  permissoes?: string[];
  ativo?: boolean;
  funcao?: string;
  dataNascimento?: string;
}
export interface IUser {
  user: IUserRespoonse;
  token: string;
}
