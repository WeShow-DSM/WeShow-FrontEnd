import axios from "axios";
import { Cookies } from "react-cookie";

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  timeout: 10000,
});
const cookies = new Cookies();

instance.interceptors.request.use(
  function (config) {
    const accessToken = cookies.get("cookie_token");
    console.log("axios", accessToken);
    accessToken &&
      (config.headers = {
        Authorization: `Bearer  ${accessToken}`,
      });
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
