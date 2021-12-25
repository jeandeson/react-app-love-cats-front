import axios from "../plugins/axios";
export default class UserService {
  async getAll(name, id) {
    return await axios.get(`users?user_name=${name}&&user_id=${id}`);
  }

  async getbyId(id) {
    return await axios.get(`users/${id}`);
  }

  async post(user) {
    return await axios.post("users", user);
  }

  async put(id, user) {
    return await axios.put(`users/${id}`, user);
  }

  async delete(id) {
    return await axios.delete(`users/${id}`);
  }
}
