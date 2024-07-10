// app/hooks/useAuth.ts
import { useMutation } from "react-query";
import useAuthStore from "../store/auth-store";

export const useAuth = () => {
  const { signIn, ...state } = useAuthStore();
  const mutation = useMutation(
    ({ email, password }: { email: string; password: string }) =>
      signIn({ login: email, senha: password, captcha: "123456" })
  );

  return {
    ...state,
    signIn: mutation.mutate,
  };
};
