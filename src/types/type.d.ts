interface IopenCageResponse {
  results: Ilocation[];
}

interface Ilocation {
  bounds: {
    northeast: {
      lat: string;
      lng: string;
    };
    southwest: {
      lat: string;
      lng: string;
    };
  };
  formatted: string;
  geometry: {
    lat: string;
    lng: string;
  };
  name: string;
}

interface Igeometry {
  lat: string;
  lng: string;
}

interface IselectedItem {
  geometry: Igeometry;
  name: string;
}

interface IsearchBarProps {
  onLocationSelect: (value: IselectedItem) => void;
}

interface IcontainerProps {
  item: IselectedItem;
}

interface IweatherDataResponse {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    temp: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: [{ id: number; main: string; description: string; icon: string }];
  wind: { speed: number; deg: number };
}