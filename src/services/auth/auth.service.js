import axios from "axios";

const API_URL = "http://localhost:8099/api/auth/";

class AuthService {
  login(formData) {
    var object = {};
    formData.forEach((value, key) => object[key] = value);
    let {email, password} = object;

    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(response => {
        if (response.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
