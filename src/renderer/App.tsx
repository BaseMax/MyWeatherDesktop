import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherForcast from './components/forcast/WeatherForcast';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import keys from '../../js/config';
import { Location, WeatherApi, Weekly } from './common/types';

export default function App() {
  const [degree, setDegree] = useState<WeatherApi>({
    dt: 20,
    temp: 0,
    wind_speed: 0,
    wind_deg: 0,
    weather: [{ id: 0 }],
  });
  const [weeklyDegrees, setWeeklyDegrees] = useState<Weekly[]>([]);
  const [city, setCity] = useState<string[]>([]);
  const [lat, setLat] = useState<number>(61.524);
  const [lon, setLon] = useState<number>(105.3188);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  const apiID = keys.weatherApi;
  const onPlaceSelect = (value: { properties: Location }): void => {
    if (value) {
      setLon(value.properties.lon);
      setLat(value.properties.lat);
      setCity([
        value.properties.city,
        value.properties.state,
        value.properties.country,
      ]);
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      const unit = checked ? 'imperial' : 'metric';
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&exclude=minutely,hourly,alerts&appid=${apiID}`
      );
      setDegree(result.data.current);
      setWeeklyDegrees(result.data.daily);
    };
    fetchItems();
  }, [apiID, lat, lon, checked]);

  useEffect(() => {
    const fetchItems = async () => {
      const location = await axios('http://www.geoplugin.net/json.gp');
      setLon(location.data.geoplugin_latitude);
      setLat(location.data.geoplugin_longitude);
      setCity([
        location.data.geoplugin_city,
        location.data.geoplugin_region,
        location.data.geoplugin_countryName,
      ]);
    };
    fetchItems();
  }, []);

  return (
    <div>
      <Sidebar selected={onPlaceSelect} deg={handleChange} />
      <Header city={city} time={degree.dt} />
      <WeatherForcast degree={degree} weekly={weeklyDegrees} />
    </div>
  );
}
