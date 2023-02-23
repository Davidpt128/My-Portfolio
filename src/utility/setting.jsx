import axios from "axios";

export const DOMAIN = "...";

export const TOKEN =
  "...";

export const USER_LOGIN = "userLogin";
export const ACCESSTOKEN = "accessToken";

export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});

http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      ["TokenCybersoft"]: TOKEN,
      ["Authorization"]: "Bearer " + JSON.parse(localStorage.getItem(ACCESSTOKEN)),
    };
    return config;
  },
  (errors) => {
    return Promise.reject(errors);
  }
);
