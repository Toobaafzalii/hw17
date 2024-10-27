import axios from "axios";

const serverUrl = "https://api.opencagedata.com";

export const api = axios.create({
  baseURL: serverUrl,
});
