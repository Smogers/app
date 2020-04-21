/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import mapContext from '../../utils/map-context';
import styles from './Weather.module.scss';

const Weather = () => {
  const {
    activeSensor: { iaqi },
  } = useContext(mapContext);
  return (
    <div className={styles.weather}>
      <div className={styles.data}>
        <span>Temperatura</span>
        <span>
          {iaqi.t.v}
          &#8451;
        </span>
      </div>
      <div className={styles.data}>
        <span>Wilgotność</span>
        <span>{iaqi.h.v}%</span>
      </div>
    </div>
  );
};

export default Weather;
