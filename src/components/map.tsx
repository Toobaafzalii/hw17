import { useState } from "react";
import { TileLayer, Marker, Popup, useMapEvent } from "react-leaflet";
export const Map: React.FC = () => {
  const [markerPosition, setMarkerPosition] = useState<ImapGeometry>({
    lat: 51.505,
    lng: -0.09,
  });
  const map = useMapEvent("click", (a) => {
    console.log(a);
    setMarkerPosition(a.latlng);
  });

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[markerPosition.lat, markerPosition.lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  );
};
