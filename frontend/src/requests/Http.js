import axios from "axios";

const Http = new axios.create({
  baseURL: "http://localhost/api",
});

Http.interceptors.request.use((config) => {
  const token = localStorage.getItem("IUDBSOTKN");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default Http;
