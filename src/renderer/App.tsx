import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherForcast from './components/forcast/WeatherForcast';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import keys from '../../js/config';

export default function App() {
  const [degree, setDegree] = useState({
    dt: 20,
    temp: 0,
    wind_speed: 0,
    wind_deg: 0,
    weather: [{ id: 0 }],
  });
  const [weeklyDegrees, setWeeklyDegrees] = useState([]);
  const [city, setCity] = useState<string[]>([]);
  const apiID = keys.weatherApi;
  useEffect(() => {
    const fetchItems = async () => {
      const direction = await axios(
        `http://api.openweathermap.org/geo/1.0/direct?q=cairo&appid=${apiID}`
      );
      const { lon, lat, name, state, country } = direction.data[0];
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${apiID}`
      );
      setDegree(result.data.current);
      setWeeklyDegrees(result.data.daily);
      setCity([name, state, country]);
    };
    fetchItems();
  }, [apiID]);

  return (
    <div>
      <Sidebar />
      <Header city={city} time={degree.dt} />
      <WeatherForcast degree={degree} weekly={weeklyDegrees} />
    </div>
  );
}
