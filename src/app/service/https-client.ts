import axios, { AxiosRequestConfig } from "axios";
// import nookies from "nookies";
// import { localStorageKeys } from "../config/local-storage-keys";
import { ls } from "../utils";

const pendingRequest = new Map();

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

httpClient.interceptors.response.use(
  (response) => {
    removeReqKey(getReqKey(response.config));
    return response;
  },
  (error) => {
    removeReqKey(getReqKey(error.config));
    console.log("observe: ", error);
    if (error?.code === "ERR_NETWORK") {
      ls.clear();
      window.location.reload();
    }
    if (error?.response?.status === 401) {
      const accessTokenData = ls.getItem("AuthStore");

      // console.log({ currentToken })
      ls.clear();

      window.location.reload();

      if (!accessTokenData) {
        ls.clear();
      }
    }
    return Promise.reject(error);
  }
);

const getReqKey = (config: AxiosRequestConfig) =>
  `${config?.method}-${config?.url}}`;

const removeReqKey = (key: string) => {
  const cancelToken = pendingRequest.get(key);
  cancelToken?.(key);
  pendingRequest.delete(key);
};

httpClient.interceptors.response.use((response) => {
  return response;
});
