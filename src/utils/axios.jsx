import axios from "axios";

const instance = axios.create({
  baseURL: "https://fibohack-backend.onrender.com/api/v1",
  withCredentials: true,
});
export default instance;
