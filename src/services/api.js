import axios from "axios";

const local = "http://localhost:3333";
const production = "https://desafio-tecnico-backend7.herokuapp.com";

const api = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? production : local,
});

export default api;
