import axios from "axios";

const apiKey = "037cb3ba5e794bf4bc393e42151eabbb";

export const getGeocode = async (query: string) => {
  const response = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json",
    {
      params: {
        key: apiKey,
        q: query,
        pretty: 1,
        no_annotations: 1,
      },
    }
  );

  return response.data;
};
