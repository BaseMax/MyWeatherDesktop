/* eslint-disable react/self-closing-comp */
import React from 'react';
import './Header.css';
import { GrLocation } from 'react-icons/gr';
import { formatAMPM } from '../utils/helpers';

interface Props {
  city: string[];
  time: number;
}

const Header: React.FC<Props> = ({ city, time }) => {
  return (
    <main className="weather__main">
      <div className="weather__main-bg"></div>
      <header className="weather__header">
        <div className="weather__header-title">{city && city[0]}</div>
        <div className="weather__header-time">
          <GrLocation />
          <div className="weather__header-time-text">
            <p>
              {city && city[1]}, {city && city[2]}
            </p>
            <p>{formatAMPM(time)}</p>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Header;
