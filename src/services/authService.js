import axios from "../plugins/axios";

export default class authService {
  handleValidateUser() {
    const isValidUser = localStorage.getItem("jwt-app-cat");
    return isValidUser;
  }

  handleGetUserInfo() {
    const user = JSON.parse(localStorage.getItem("user-app-cat"));
    return user;
  }

  handleGetUserToken() {
    const token = JSON.parse(localStorage.getItem("token-app-cat"));
    return token;
  }

  handleLogout() {
    localStorage.removeItem("jwt-app-cat");
    localStorage.removeItem("user-app-cat");
  }

  handleJwtToken(token) {
    if (localStorage.getItem("jwt-app-cat")) {
      localStorage.removeItem("jwt-app-cat");
    }
    localStorage.setItem("jwt-app-cat", JSON.stringify(token));
  }

  handleUserInfo(user) {
    if (localStorage.getItem("user-app-cat")) {
      localStorage.removeItem("user-app-cat");
    }
    localStorage.setItem("user-app-cat", JSON.stringify(user));
  }

  async login(body) {
    const { data } = await axios.post("auth/login", JSON.stringify(body));
    this.handleJwtToken(data.token);
    this.handleUserInfo(data.user);
    return data;
  }

  async sendResetPassEmail(body) {
    return axios.post("auth/forgot_password", JSON.stringify(body));
  }

  async resetUserPassword(body) {
    return axios.post("auth/reset_password", JSON.stringify(body));
  }

  async register(body) {
    return axios.post("auth/register", JSON.stringify(body));
  }
}
