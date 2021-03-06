import axios from "axios";

const weatherInstance = axios.create({
  baseUrl: "http://api.openweathermap.org/data/2.5/weather",
});

weatherInstance.interceptors.request.use((req) => {
  console.log(req);
  return req;
});

weatherInstance.interceptors.response.use(
  (res) => {
    console.log(res);
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default weatherInstance;
