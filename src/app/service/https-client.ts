import axios from "axios";
import nookies from "nookies";
import { localStorageKeys } from "../config/local-storage-keys";
import { isTokenExpired } from "../utils/authUtils";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

httpClient.interceptors.request.use((config) => {
  const cookies = nookies.get(null);
  const accessToken = cookies[localStorageKeys.ACCESS_TOKEN];

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

httpClient.interceptors.request.use(
  async (config) => {
    const cookies = nookies.get();
    const token = cookies["auth-token"];

    if (token && isTokenExpired(token)) {
      // Token expirado, redirecione para a página de login ou faça outra ação necessária
      window.location.reload();
      return Promise.reject(new Error("Token expirado"));
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use((response) => {
  return response;
});
