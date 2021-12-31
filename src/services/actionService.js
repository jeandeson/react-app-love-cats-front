import axios from "../plugins/axios";
export default class ActionService {
  async follow(body) {
    return await axios.post("actions/follows", body);
  }

  async comment(body) {
    return await axios.post("actions/comments", body);
  }

  async unFollow(body) {
    return await axios.delete(`actions/follows?user_id=${body.user_id}&&followed_id=${body.followed_id}`);
  }

  async verifyFollow(body) {
    return await axios.get(`actions/follows?user_id=${body.user_id}&&followed_id=${body.followed_id}`);
  }

  async getTotalFollow(id) {
    return await axios.get(`actions/follows/total/${id}`);
  }
}
