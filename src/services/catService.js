import axios from "../plugins/axios";
export default class CatService {
  async getAll() {
    return await axios.get("cats");
  }

  async getbyId(id) {
    return await axios.get(`cats/${id}`);
  }

  async post(cat) {
    return await axios.post("cats", cat);
  }

  async put(id, cat) {
    return await axios.put(`cats/${id}`, cat);
  }

  async delete(id) {
    return await axios.delete(`cats/${id}`);
  }
}
