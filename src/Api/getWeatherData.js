import axios from "./axiosWeather.instance.";
// import axios from "axios";

class Api {
  constructor(url, location, apiKey, unit) {
    this.url = url;
    this.location = location;
    this.apiKey = apiKey;
    this.unit = unit;
  }

  async getData() {
    const data = await axios.get(this.url, {
      params: {
        q: this.location,
        units: this.unit,
        appid: this.apiKey,
      },
    });
    return data;
  }
}

export default Api;
