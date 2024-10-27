import { AxiosError } from "axios";
import { api } from "./location.client";

export const fetchLocations = async (
  searchKey: string
): Promise<IopenCageResponse> => {
  try {
    const response = await api.get(
      `/geosearch?q=${searchKey}&key=037cb3ba5e794bf4bc393e42151eabbb&limit=5&language=en`,
      {
        headers: {
          "opencage-geosearch-key": "oc_gs_SJqvrAWtCs2mcAvMs5f9yPs6LI1QcD",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    return Promise.reject(error as AxiosError);
  }
};
