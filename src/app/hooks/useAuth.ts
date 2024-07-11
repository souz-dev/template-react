import { useMutation } from "@tanstack/react-query";
import useAuthStore from "../store/auth-store";

export const useAuth = () => {
  const { signIn, ...state } = useAuthStore();
  const mutation = useMutation(
    ({ email, password }: { email: string; password: string }) =>
      signIn(email, password)
  );

  return {
    ...state,
    signIn: mutation.mutate,
  };
};
