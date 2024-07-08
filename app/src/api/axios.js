import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.VITE_BACKEND_URL,
  withCredentials: true,
});

export default Axios;
