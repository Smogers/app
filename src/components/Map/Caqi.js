import React, { useContext } from 'react';
import mapContext from '../../utils/map-context';
import { descriptions } from '../../../public/data/caqi-descriptions.json';
import './caqi.module.scss';

const Caqi = () => {
  const { sensorMeasurement } = useContext(mapContext);
  const [currentMeasurement] = sensorMeasurement;
  const countCaqi = (measurement) => {
    console.log(measurement);
    return 21;
  };
  const caqi = countCaqi(currentMeasurement);
  const [bad, medium, good, veryGood] = descriptions;
  const setStatus = (caqiValue) => {
    if (caqiValue < 20) return { backgroundColor: '#44a368', status: veryGood };
    if (caqiValue < 40) return { backgroundColor: '#a9c46e', status: good };
    if (caqiValue < 60) return { backgroundColor: '#c19330', status: medium };
    return { backgroundColor: '#e1625a', status: bad };
  };
  const { status, backgroundColor } = setStatus(caqi);
  return (
    <a
      href="/encyklopedia#caqi"
      className="map__data__caqi"
      style={{ backgroundColor }}
    >
      <div className="map__data__caqi__wrapper">
        <h3 className="map__data__caqi__title">CAQI</h3>
        <h2 className="map__data__caqi__measurement">{caqi}</h2>
      </div>
      <p className="map__data__status">{status}</p>
    </a>
  );
};

export default Caqi;
