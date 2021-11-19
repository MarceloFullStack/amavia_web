import axios from "axios";

const API_URL = "http://localhost:1337/auth/";

class AuthService {
  login(formData) {
    var object = {};
    formData.forEach((value, key) => object[key] = value);
    let {email, password} = object;

    return axios
      .post(API_URL + "local", {
        "identifier": email,
        password
      }, {
        headers: {"Authorization": '', 'Content-Type': 'application/json'}
      })
      .then(response => {
        if (response.data.jwt) {
          localStorage.setItem("user", JSON.stringify(response.data));
          window.location = '/#/dashboard'

        }
        return response.data;
      }).catch(error => {
        return console.log(error.response.data);

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
