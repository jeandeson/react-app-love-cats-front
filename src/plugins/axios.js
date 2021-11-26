import Axios from "axios";

const baseURL = "localhost:3000/api";
const headers = { "Content-Type": "application/json" };
const timeout = 0;

const axios = Axios.create({ baseURL, timeout, headers });

export default axios;
