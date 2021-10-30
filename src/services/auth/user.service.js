import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8099/api/";

var user = JSON.parse(localStorage.getItem('user')) ;

  axios.interceptors.request.use(function (config) {
    const token = user?.access_token || "";
    config.headers.Authorization =  `Bearer ${token}`;

    return config;
  });


class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getAll() {
    return axios.get(API_URL + "employee");
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod");
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin");
  }

  isAuthenticated() {
      return axios.post("http://localhost:8099/api/valid", {})
  }
}
export default new UserService();

