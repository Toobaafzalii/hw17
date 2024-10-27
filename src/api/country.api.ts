import { AxiosError } from "axios";
import { api } from "./country.client";

export const fetchCountryData = async (name: string): Promise<unknown> => {
  try {
    const response = await api.get(`/v3.1/alpha/${name}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return Promise.reject(error as AxiosError);
  }
};
