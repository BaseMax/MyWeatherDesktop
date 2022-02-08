import './App.css';
import WeatherForcast from './components/forcast/WeatherForcast'
import Header from './components/header/Header'

export default function App() {  
  return (
    <div>
      <Header/>
      <WeatherForcast/>
    </div>
  );
}
