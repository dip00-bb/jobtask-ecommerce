import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://buy-latest-server.vercel.app/", 
});

export default axiosPublic;