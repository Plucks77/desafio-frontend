import axios from "axios";

const local = "http://localhost:3333";

const api = axios.create({
  baseURL: local,
});

export default api;
