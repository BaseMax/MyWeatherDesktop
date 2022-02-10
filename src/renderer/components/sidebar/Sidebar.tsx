/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Sidebar.css';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import Autocomplete from './Autocomplete';

const Sidebar: React.FC = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
      {menuToggle ? (
        <GiHamburgerMenu
          className="menu-btn"
          onClick={() => setMenuToggle(false)}
        />
      ) : (
        <AiOutlineClose
          className="menu-btn"
          onClick={() => setMenuToggle(true)}
        />
      )}
      <nav className={`weather__nav ${menuToggle ? '' : 'show'}`}>
        <div className="weather__nav-city">
          <p>Pick A City</p>
          <div className="Hotbg">
            <Autocomplete />
            <a href="#" className="Hotbg-btn">
              <AiOutlineSearch />
            </a>
          </div>
          <button className="weather__nav-city-default">Set As Default</button>
        </div>
        <div className="toggle-btn" id="_1st-toggle-btn">
          <input type="checkbox" />
          <span />
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
