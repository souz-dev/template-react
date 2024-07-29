import axios from "axios";
// import nookies from "nookies";
// import { localStorageKeys } from "../config/local-storage-keys";
import { isTokenExpired } from "../utils/authUtils";
import { ls } from "../utils";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

httpClient.interceptors.request.use((config) => {
  const accessTokenData = ls.getItem("AuthStore");

  if (accessTokenData) {
    const parsedData = JSON.parse(accessTokenData);
    if (parsedData && parsedData.state && parsedData.state.user) {
      const accessToken = parsedData.state.user.token;

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
  }

  return config;
});

httpClient.interceptors.request.use(
  async (config) => {
    const accessTokenData = ls.getItem("AuthStore");

    if (accessTokenData) {
      const parsedData = JSON.parse(accessTokenData);
      if (parsedData && parsedData.state && parsedData.state.user) {
        const token = parsedData.state.user.token;

        if (token && isTokenExpired(token)) {
          // Token expirado, redirecione para a página de login ou faça outra ação necessária
          window.location.reload();
          return Promise.reject(new Error("Token expirado"));
        }

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
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
