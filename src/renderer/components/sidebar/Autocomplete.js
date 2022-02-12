import React from 'react';
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import './Sidebar.css';
import keys from '../../../../js/config';

// eslint-disable-next-line react/prop-types
const App = ({ Loc }) => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <GeoapifyContext apiKey={keys.autoCompleteApi}>
      <div className="Hotbg-txtt">
        <GeoapifyGeocoderAutocomplete placeSelect={Loc} />
      </div>
    </GeoapifyContext>
  );
};

export default App;
