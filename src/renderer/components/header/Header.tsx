import './Header.css';
import { GrLocation } from 'react-icons/gr';

const Header = () => {
  return (
    <main className="weather__main">
      <div className="weather__main-bg"></div>
      <header className="weather__header">
        <div className="weather__header-title">Bucharist, RO</div>
        <div className="weather__header-time">
          <GrLocation />
          <div className="weather__header-time-text">
          <p>Florida, USA</p>
          <p>20:15 pm</p>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Header;
