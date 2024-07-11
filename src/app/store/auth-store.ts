import { create } from "zustand";
import { IUser } from "../entities/user";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";
import nookies from "nookies";

interface AuthState {
  user: IUser | null;
  signedIn: boolean;
  signIn: (params: IUser) => void;
  signOut: () => void;
}

const initialValues = {
  signedIn: false,
  user: null,
};

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

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      ...initialValues,
      signIn: (user: IUser) => {
        console.log("chamou");
        return set({ signedIn: true, user });
      },
      signOut: () => set(initialValues),
    }),
    {
      name: "AuthStore",
      storage: createJSONStorage(() => nookiesStorage),
    }
  )
);

export default useAuthStore;
