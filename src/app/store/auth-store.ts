// app/store/authStore.ts
import { create } from "zustand";
import { persist, StateStorage } from "zustand/middleware";
import nookies from "nookies";
import { ISignInParams } from "../service/auth-service/sign-in";
import { authService } from "../service/auth-service";
import { IUser } from "../entities/user";
import { isTokenExpired } from "../utils";

interface AuthState {
  user: IUser | null;
  error: string | null;
  signIn: (maparams: ISignInParams) => Promise<void>;
  signOut: () => void;
}

const nookiesStorage: StateStorage = {
  getItem: (key) => {
    const cookies = nookies.get();
    return cookies[key] ? JSON.stringify(cookies[key]) : null;
  },
  setItem: (key, value) => {
    nookies.set(null, key, JSON.parse(value), { path: "/" });
  },
  removeItem: (key) => {
    nookies.destroy(null, key, { path: "/" });
  },
};

const useAuthStore = create<AuthState>(
  persist(
    (set) => ({
      user: null,
      error: null,
      signIn: async ({ login, captcha, senha }) => {
        try {
          const { token, user } = await authService.signIn({
            login,
            captcha,
            senha,
          });
          if (!isTokenExpired(token)) {
            set({ user, error: null });
            nookies.set(null, "auth-token", token, { path: "/" });
          } else {
            set({ error: "Token expirado" });
          }
        } catch (error) {
          set({ error: "Erro desconhecido" });
        }
      },
      signOut: () => {
        set({ user: null });
        nookies.destroy(null, "auth-token", { path: "/" });
      },
    }),
    {
      name: "auth-storage", // Nome da chave do storage local
      getStorage: () => nookiesStorage,
    }
  )
);

export default useAuthStore;
