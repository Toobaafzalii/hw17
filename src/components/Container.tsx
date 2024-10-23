import React from "react";
import { TileLayer, Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet";
import { CodeBox } from "./codeBox";
import { CapitalBox } from "./capitalBox";
import { CountryBox } from "./countryBox";

export const Container: React.FC = () => {
  //   const GeocodeExample = () => {
  //     const { data, isLoading, isError, error } = useQuery("geocode", () =>
  //       getGeocode("your_query")
  //     );

  //     if (isLoading) {
  //       return <p>Loading...</p>;
  //     }

  //     if (isError) {
  //       return <p>Error: {error.message}</p>;
  //     }
  //   };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 w-full gap-x-10 gap-y-4 px-10">
      <CountryBox />
      <CapitalBox />
      <div
        id="flag"
        className="w-full h-80 my-6 mr-20 flex justify-center items-center text-center text-gray-500 text-xl font-semibold border-y-2 border-dashed border-amber-900 rounded-xl "
      >
        COUNTRY FLAG
      </div>
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
      <CodeBox />
    </div>
  );
};
