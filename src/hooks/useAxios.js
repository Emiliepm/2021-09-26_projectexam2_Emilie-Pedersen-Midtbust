import { useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { BASE_URL } from "../constants/Api";

const url = BASE_URL;

export default function useAxios() {
  const [auth] = useContext(AuthContext);
  var token = null;

  const apiClient = axios.create({
    baseURL: url,
  });

  apiClient.interceptors.request.use(function (config) {
    console.log("Auth is now: ", auth);
    if (auth === null) {
      token = auth;
    } else {
      token = auth.jwt;
    }
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  return apiClient;
}
