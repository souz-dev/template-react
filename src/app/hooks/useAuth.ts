import { useMutation } from "@tanstack/react-query";
import useAuthStore from "../store/auth-store";

export const useAuth = () => {
  const { signIn, ...state } = useAuthStore();

  const mutation = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
      captcha: string;
    }) => {
      return await signIn({ login: email, password });
    },
    onError: (error) => {
      // Lidar com erros aqui
      console.error("Erro na autenticação:", error);
    },
    onSuccess: (data) => {
      // Ação a ser tomada em caso de sucesso
      console.log("Autenticação bem-sucedida:", data);
    },
  });

  return {
    ...state,
    signIn: mutation.mutate,
    signInStatus: mutation.status,
    signInError: mutation.error,
    isSignInLoading: mutation.isPending,
  };
};
