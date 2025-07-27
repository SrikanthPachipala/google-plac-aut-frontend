import React, { useCallback, useRef } from 'react';
import { GoogleMap, LoadScript, Autocomplete, Marker } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPlace } from './placesSlice';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 40.7128, // Default to New York
  lng: -74.0060,
};

function App() {
  const dispatch = useDispatch();
  const selectedPlace = useSelector((state) => state.places.selectedPlace);
  const autocompleteRef = useRef(null);

  const onPlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    if (place && place.geometry) {
      dispatch(
        setSelectedPlace({
          name: place.formatted_address,
          location: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          },
        })
      );
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDrfvMhzqqP8-XmolppZLrv2DlVMW_R_aM" libraries={["places"]}>
      <h2 style={{ textAlign: 'center' }}>Google Places Autocomplete with Map</h2>

      <Autocomplete
        onLoad={(ref) => (autocompleteRef.current = ref)}
        onPlaceChanged={onPlaceChanged}
      >
        <input
          type="text"
          placeholder="Search a location"
          style={{ width: '90%', height: '40px', margin: '20px auto', display: 'block' }}
        />
      </Autocomplete>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={selectedPlace ? selectedPlace.location : center}
        zoom={selectedPlace ? 14 : 10}
      >
        {selectedPlace && <Marker position={selectedPlace.location} />}
      </GoogleMap>
    </LoadScript>
  );
}

export default App;
