import Http from "./Http";

export default {
  register(data) {
    return Http.post("/register", data);
  },
  login(data) {
    return Http.post("/login", data);
  },
  logout() {
    return Http.post("/logout");
  },
};
