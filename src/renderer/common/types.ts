export interface WeatherForcastType {
  degree: WeatherApi;
  weekly: Weekly[];
}
export interface Weekly {
  dt: number;
  temp: { max: number; min: number };
  weather: { id: number }[];
}

export interface Location {
  lat: number;
  lon: number;
  city: string;
  country: string;
  state: string;
}

export interface SideBarType {
  selected: (value: { properties: Location }) => void;
  deg: () => void;
}

export interface HeaderType {
  city: string[];
  time: number;
}

export interface WeatherApi {
  dt: number;
  temp: number;
  wind_speed: number;
  wind_deg: number;
  weather: { id: number }[];
}
