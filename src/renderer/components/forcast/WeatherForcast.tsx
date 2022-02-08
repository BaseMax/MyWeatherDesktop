import './WeatherForcast.css';
import { FiCloudRain, FiCloud, FiSun } from 'react-icons/fi';
import { BsSnow } from 'react-icons/bs';

const WeatherForcast = () => {
  return (
    <div className="weather__forcast">
      <table className="weather__forcast-list">
        <li>
          <div className="weather__forcast-list-today">

          <div className="weather__forcast-list-today-text">
            <h3>
              82<span>&#176;</span>
            </h3>
            <p>Monday</p>
          </div>
          <div className="weather__forcast-list-today-icon">
            <FiCloudRain />
            <p>
              4mph / 67<span>&#176;</span>
            </p>
          </div>
          </div>

        </li>
        <li>
          <p>Tue</p>
          <FiSun color="orange" />
          <p>
            60<span>&#176;</span>
          </p>
        </li>
        <li>
          <p>Wed</p>
          <BsSnow color="white" />
          <p>
            60<span>&#176;</span>
          </p>
        </li>
        <li>
          <p>Thu</p>
          <BsSnow color="white"  />
          <p>
            60<span>&#176;</span>
          </p>
        </li>
        <li>
          <p>Fri</p>
          <FiSun color="orange" />
          <p>
            60<span>&#176;</span>
          </p>
        </li>
        <li>
          <p>Sat</p>
          <FiCloud color="white" />
          <p>
            60<span>&#176;</span>
          </p>
        </li>
        <li>
          <p>Tue</p>
          <FiCloud color="white" />
          <p>
            60<span>&#176;</span>
          </p>
        </li>
      </table>
    </div>
  );
};

export default WeatherForcast;
