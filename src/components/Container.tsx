import React, { useEffect, useState } from "react";
import { TileLayer, Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet";
import { CodeBox } from "./codeBox";
import { CapitalBox } from "./capitalBox";
import { CountryBox } from "./countryBox";
import { useMutation, useQuery } from "react-query";
import { fetchWeatherData } from "../api/weather.api";
import { fetchCountryData } from "../api/country.api";

export const Container: React.FC<IcontainerProps> = (props) => {
  const weatherData = useMutation({
    mutationKey: ["weather"],
    mutationFn: (value: Igeometry) => fetchWeatherData(value),
  });

  const countriesData = useMutation({
    mutationKey: ["countries"],
    mutationFn: (value: string) => fetchCountryData(value),
  });

  useEffect(() => {
    weatherData.mutate(props.item.geometry, {
      onSuccess(data) {
        console.log(data);
      },
    });
  }, [props.item]);

  useEffect(() => {
    if (weatherData.data?.sys.country) {
      countriesData.mutate(weatherData.data?.sys.country, {
        onSuccess(data) {
          console.log(data);
        },
      });
    }
  }, [weatherData.data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 w-full gap-x-10 gap-y-4 px-10">
      <CountryBox />
      <CapitalBox />
      <div
        id="flag"
        className="w-full h-88 my-8 mr-20 flex justify-center items-center text-center text-gray-500 text-xl font-semibold border-y-2 border-dashed border-amber-900 rounded-xl "
      >
        COUNTRY FLAG
      </div>
      <CodeBox />
      <div
        id="map"
        className="w-full grid col-span-2 h-96 p-2 px-4 border-y-2 border-dashed border-amber-900 rounded-xl"
      >
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};
