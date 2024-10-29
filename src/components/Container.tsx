import React, { useEffect, useState } from "react";
import { CodeBox } from "./codeBox";
import { CityBox } from "./cityBox";
import { CountryBox } from "./countryBox";
import { Map } from "./map";
import { useMutation } from "react-query";
import { fetchWeatherData } from "../api/weather.api";
import { fetchCountryData } from "../api/country.api";
import { MapContainer } from "react-leaflet";

export const Container: React.FC<IcontainerProps> = (props) => {
  const [cityData, setCityData] = useState<IweatherDataResponse>();
  const weatherData = useMutation({
    mutationKey: ["weather"],
    mutationFn: (value: Igeometry) => fetchWeatherData(value),
  });

  const secondWeatherData = useMutation({
    mutationKey: ["weather2"],
    mutationFn: (value: Igeometry) => fetchWeatherData(value),
  });

  // const weatherDataName = useMutation({
  //   mutationKey: ["weather"],
  //   mutationFn: (value: string) => fetchWeatherDataWithName(value),
  // });

  const countriesData = useMutation<IcountryData, unknown, string>({
    mutationKey: ["countries"],
    mutationFn: (value: string) => fetchCountryData(value),
  });

  useEffect(() => {
    if (props.item.name) {
      weatherData.mutate(props.item.geometry, {
        onSuccess(weatherData) {
          countriesData.mutate(weatherData.sys.country, {
            onSuccess(data) {
              if (!props.item.formatted.includes(",")) {
                secondWeatherData.mutate(
                  {
                    lat: data[0].capitalInfo.latlng[0].toString(),
                    lng: data[0].capitalInfo.latlng[1].toString(),
                  },
                  {
                    onSuccess(data) {
                      setCityData(data);
                    },
                  }
                );
              } else {
                setCityData(weatherData);
              }
            },
          });
        },
      });
    }
  }, [props.item]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:container mx-auto w-full gap-x-10 gap-y-4 px-10">
      <CountryBox country={countriesData?.data?.[0]} />
      <CityBox weatherData={cityData} />
      <div
        id="flag"
        className="relative w-full h-88 my-8 mr-20 flex justify-center items-center text-center text-gray-500 text-xl font-semibold border-y-2 border-dashed border-cyan-900 rounded-xl "
      >
        COUNTRY FLAG
        {countriesData.data && countriesData?.data?.length > 0 && (
          <div className="absolute top-7 h-60">
            <img
              className="h-full"
              src={countriesData.data?.[0].flags.svg}
              alt="country-flag"
            />
          </div>
        )}
      </div>
      <CodeBox country={countriesData?.data?.[0]} />
      <div
        id="map"
        className="w-full grid col-span-2 h-96 p-2 px-4 border-y-2 border-dashed border-cyan-900 rounded-xl"
      >
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <Map />
        </MapContainer>
      </div>
    </div>
  );
};
