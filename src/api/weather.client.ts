import axios from "axios";

const serverUrl = "https://api.openweathermap.org";

export const api = axios.create({
  baseURL: serverUrl,
});
