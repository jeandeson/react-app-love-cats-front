import axios from "../plugins/axios";
export default class LikeService {
  async getAll(id) {
    return await axios.get(`likes?post_id=${id}`);
  }

  async getbyId(id) {
    return await axios.get(`likes/${id}`);
  }

  async post(like) {
    return await axios.post("likes", like);
  }

  async put(id, like) {
    return await axios.put(`likes/${id}`, like);
  }

  async delete(id) {
    return await axios.delete(`likes/${id}`);
  }
}
