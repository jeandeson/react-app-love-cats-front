import axios from "../plugins/axios";
export default class PostsService {
  async getAll(id) {
    return await axios.get(`posts?user_id=${id}`);
  }

  async getbyId(id) {
    return await axios.get(`posts/${id}`);
  }

  async post(post) {
    return await axios.post("posts", post);
  }

  async put(id, post) {
    return await axios.put(`posts/${id}`, post);
  }

  async delete(id) {
    return await axios.delete(`posts/${id}`);
  }
}
