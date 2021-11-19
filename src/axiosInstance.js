import axios from "axios";

const baseURL = "https://www.balldontlie.io/api/v1/";

export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
