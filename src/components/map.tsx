import { useEffect, useState } from "react";
import { TileLayer, Marker, Popup, useMapEvent } from "react-leaflet";

export const Map: React.FC<ImapProps> = (props) => {
  const [markerPosition, setMarkerPosition] = useState<ImapGeometry>({
    lat: 51.505,
    lng: -6.09,
  });

  const map = useMapEvent("click", (e) => {
    setMarkerPosition(e.latlng);
    props.onMapClick(e.latlng);
  });

  useEffect(() => {
    if (props.searchedGeometry?.lat) {
      setMarkerPosition({
        lat: Number(props.searchedGeometry.lat),
        lng: Number(props.searchedGeometry.lng),
      });
      map.setView(
        [
          Number(props.searchedGeometry.lat),
          Number(props.searchedGeometry.lng),
        ],
        map.getZoom()
      );
    }
  }, [props.searchedGeometry]);

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
