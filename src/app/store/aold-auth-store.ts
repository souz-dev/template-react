// import { create, StateCreator } from "zustand";
// import { persist, PersistOptions, StateStorage } from "zustand/middleware";
// import nookies from "nookies";
// import { ISignInParams } from "../service/auth-service/sign-in";
// import { authService } from "../service/auth-service";
// import { IUser } from "../entities/user";
// import { isTokenExpired } from "../utils";

// interface AuthState {
//   user: IUser | null;
//   error: string | null;
//   signedIn: boolean;
//   signIn: (params: ISignInParams) => Promise<void>;
//   signOut: () => void;
// }

// const nookiesStorage: StateStorage = {
//   getItem: (key) => {
//     const cookies = nookies.get();
//     return cookies[key] ? JSON.stringify(cookies[key]) : null;
//   },
//   setItem: (key, value) => {
//     nookies.set(null, key, JSON.parse(value), { path: "/" });
//   },
//   removeItem: (key) => {
//     nookies.destroy(null, key, { path: "/" });
//   },
// };

// interface MyPersist {
//   (
//     config: StateCreator<AuthState>,
//     options: PersistOptions<AuthState>
//   ): StateCreator<AuthState>;
// }

// const useAuthStoreOld = create<AuthState>(
//   (persist as MyPersist)(
//     (set) => ({
//       user: null,
//       error: null,
//       signedIn: false,
//       signIn: async ({ login, password }: ISignInParams) => {
//         try {
//           const { token, user } = await authService.signIn({ login, password });
//           console.log("storeToken", { token });
//           if (!isTokenExpired(token)) {
//             set({ user, error: null, signedIn: true });
//             nookies.set(null, "auth-token", token, { path: "/" });
//           } else {
//             set({ error: "Token expirado", signedIn: false });
//           }
//         } catch (error) {
//           set({ error: "Erro desconhecido", signedIn: false });
//         }
//       },
//       signOut: () => {
//         set({ user: null, signedIn: false });
//         nookies.destroy(null, "auth-token", { path: "/" });
//       },
//     }),
//     {
//       name: "auth-storage",
//       getStorage: () => nookiesStorage,
//     }
//   )
// );

// export default useAuthStoreOld;
