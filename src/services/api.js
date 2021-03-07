import axios from "axios";

const local = "http://localhost:3333";
const production = "http://3.138.161.15";

const api = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? production : local,
});

export default api;
