import React from 'react';
import './WeatherForcast.css';
import { WeatherForcastType } from 'renderer/common/types';
import { getDay } from '../utils/helpers';
import Icon from '../Icon';

const WeatherForcast: React.FC<WeatherForcastType> = ({ degree, weekly }) => {
  return (
    <div className="weather__forcast">
      <ul className="weather__forcast-list">
        <li>
          <div className="weather__forcast-list-today">
            <div className="weather__forcast-list-today-text">
              <h3>
                {degree && Math.round(degree.temp)}
                <span>&#176;</span>
              </h3>
              <p>{getDay(degree.dt)}</p>
            </div>
            <div className="weather__forcast-list-today-icon">
              <Icon id={degree.weather[0].id} />
              <p>
                {degree.wind_speed}mph / {Math.round(degree.wind_deg)}
                <span>&#176;</span>
              </p>
            </div>
          </div>
        </li>
        {weekly &&
          weekly.slice(1).map((day) => {
            return (
              <li key={day.dt}>
                <p>{getDay(day.dt).substring(0, 3)}</p>
                <Icon id={day.weather[0].id} />
                <p>
                  {Math.round(day.temp.max)}
                  <span>&#176;</span> / {Math.round(day.temp.min)}
                  <span>&#176;</span>
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default WeatherForcast;
