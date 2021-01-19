import axios from "./axiosWeather.instance.";
// import axios from "axios";

class Api {
  constructor(url, location, cnt, apiKey, unit) {
    this.url = url;
    this.location = location;
    this.cnt = cnt;
    this.apiKey = apiKey;
    this.unit = unit;
  }

  async getData() {
    const data = await axios.get(this.url, {
      params: {
        q: this.location,
        metric: this.metric,
        cnt: this.cnt,
        appid: this.apiKey,
      },
    });
    console.log(data);
    return data;
  }
}

export default Api;
