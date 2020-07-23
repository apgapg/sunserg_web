import axios from "axios";
import store from "../store/index.js";

const httpClient = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL,
  baseURL: "https://api.sunserg.com",
});

const getAuthToken = () => store.state.user.token;

const authInterceptor = (config) => {
  config.headers["Authorization"] = getAuthToken();
  return config;
};

httpClient.interceptors.request.use(authInterceptor);

httpClient.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    if (error.status === 401) {
      store.dispatch("user/logout");
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default httpClient;
