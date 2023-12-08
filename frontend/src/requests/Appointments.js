import Http from "./Http";

export default {
  create(data) {
    return Http.post("/appointments", data);
  },
  get(id) {
    return Http.get(`/appointments/${id}`);
  },
  delete(id) {
    return Http.delete(`/appointments/${id}`);
  },
};
