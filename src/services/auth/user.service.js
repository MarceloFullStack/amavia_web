import axios, {  } from "axios";

const API_URL = "http://localhost:8099/api/";

var user = JSON.parse(localStorage.getItem('user')) ;

  axios.interceptors.request.use(function (config) {
    const token = user?.access_token || "";
    config.headers.Authorization =  `Bearer ${token}`;

    return config;
  });


class UserService {


  getAll(url) {
    return axios.get(API_URL + url);
  }

  create(url, payload) {
    return axios.post(API_URL + url, payload);
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin");
  }

  isAuthenticated() {
      return axios.post("http://localhost:8099/api/valid", {})
  }
}
export default new UserService();

