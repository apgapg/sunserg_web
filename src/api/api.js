import axios from "axios";
import store from "../store/index.js";

const httpClient = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL,
  baseURL: 'https://api.sunserg.com',
});

const getAuthToken = () => store.state.user.token;

const authInterceptor = (config) => {
  config.headers["Authorization"] = getAuthToken();
  return config;
};

httpClient.interceptors.request.use(authInterceptor);

export default httpClient;
