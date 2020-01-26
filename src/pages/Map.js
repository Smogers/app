import React, { useReducer } from 'react';
import Map from '../components/Map';
import Data from '../components/MapData';
import MapContext from '../contexts/map-context';
import mapReducer from '../reducers/map-reducer';

const MapPage = () => {
  const [state, dispatch] = useReducer(mapReducer, {});
  return (
    <MapContext.Provider value={{ state, dispatch }}>
      <>
        <Map />
        <Data />
      </>
    </MapContext.Provider>
  );
};

export default MapPage;