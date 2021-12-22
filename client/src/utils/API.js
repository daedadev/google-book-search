import axios from "axios";

export default {
  getBooks: function () {
    return axios.get(`http://localhost:3001/api/book/`);
  },
  addBooks: function () {
    return axios.post(`http://localhost:3001/api/book/`);
  },
  deleteBooks: function () {
    return axios.get(`http://localhost:3001/api/book/delete`);
  },
};
