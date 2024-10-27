import { AxiosError } from "axios";
import { api } from "./weather.client";

export const fetchWeatherData = async (
  searchKeys: Igeometry
): Promise<IweatherDataResponse> => {
  try {
    const response = await api.get(
      `/data/2.5/weather?lat=${Number(searchKeys.lat)}&lon=${Number(
        searchKeys.lng
      )}&appid=5639f244600744ef8b0a77e131251c43`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return Promise.reject(error as AxiosError);
  }
};
