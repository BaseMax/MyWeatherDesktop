import React, { useState } from 'react';
import './Sidebar.css';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SideBarType } from 'renderer/common/types';
import Autocomplete from './Autocomplete';

const Sidebar: React.FC<SideBarType> = ({ selected, deg }) => {
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
            <Autocomplete Loc={selected} />
          </div>
        </div>
        <div className="weather__nav-deg">
          <p>Choose Degree</p>
          <div className="toggle-btn" id="_1st-toggle-btn">
            <input type="checkbox" onChange={deg} />
            <span />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
