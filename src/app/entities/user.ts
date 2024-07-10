import { ICompany } from "./company";

export interface IUser {
  id?: string;
  nome?: string;
  empresas?: ICompany[];
  email?: string;
  permissoes?: string[];
  ativo?: boolean;
  funcao?: string;
  dataNascimento?: string;
}
