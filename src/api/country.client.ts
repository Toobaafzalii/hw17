import axios from "axios";

const serverUrl = " https://restcountries.com";

export const api = axios.create({
  baseURL: serverUrl,
});
