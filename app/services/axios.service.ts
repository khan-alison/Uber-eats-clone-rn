import axios, { AxiosRequestConfig, Method } from "axios";

const BASE_URL = "http://localhost:3000/";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default async function callApi(
  url: string,
  method: Method,
  config?: AxiosRequestConfig
) {
  try {
    const response = await axiosInstance({ url, method, ...config });
    return response;
  } catch (error) {
    if (error) {
      return Promise.reject(error);
    }
  }
}
