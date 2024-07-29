import { create } from "zustand";
import { IUser } from "../entities/user";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";

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

const localStorage: StateStorage = {
  getItem: (key) => window.localStorage.getItem(key),
  setItem: (key, value) => window.localStorage.setItem(key, value),
  removeItem: (key) => window.localStorage.removeItem(key),
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
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
