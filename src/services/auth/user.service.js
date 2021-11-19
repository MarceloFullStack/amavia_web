import axios, {  } from "axios";

const API_URL = "http://localhost:1337/";

var user = JSON.parse(localStorage.getItem('user')) ;

  axios.interceptors.request.use(function (config) {
    const token = user?.jwt || "";
    config.headers.Authorization =  `Bearer ${token}`;

    return config;
  });


class UserService {


  getAll(url) {
    return axios.get(API_URL + url);
  }
  getOne(url, id) {
    return axios.get(API_URL + url + id);
  }

  create(url, payload) {
    return axios.post(API_URL + url, payload);
  }
  update(url, payload) {
    return axios.put(API_URL + url , payload);
  }
  delete(url, id) {
    return axios.delete(API_URL + url + id);
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin");
  }

  isAuthenticated() {
      return axios.post("http://localhost:8099/api/valid", {})
  }
}
export default new UserService();

