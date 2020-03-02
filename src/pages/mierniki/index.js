/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import CardWithThumbnail from '../../components/CardWithThumbnail';
import './sensors.module.scss';
import sensor300 from '../../../public/img/sensors/sensor-300.jpg';
import sensor800 from '../../../public/img/sensors/sensor-800.jpg';

const Sensors = () => {
  return (
    <main className="content">
      <h1>Nasze mierniki</h1>

      <CardWithThumbnail
        value={{
          header: 'Nasze urządzenia',
          description:
            'Nasz zespół jest w trakcie projektowania układu, dzięki któremu każdy będzie mógł poprzez naszą stonę lub aplikację zobaczyć jaki jest stan powietrza którym oddychamy.',
          thumbnail: [sensor300, sensor800],
          env: 'sensors',
        }}
      />
      <div className="card sensors__info">
        <h2 className="sensors__h2">Kiedy będzie dostępny nasz miernik?</h2>
        <p className="sensors__paragraph">
          Już za niedługo nasz miernik będzie dostępny dla każdego i dane z
          naszych urządzeń będą dostępne dla każdego na naszej stronie
          internetowej oraz aplikacji.
        </p>
      </div>
      <div className="card sensors__ad">
        <h2 className="sensors__h2">Zainteresowany miernikiem?</h2>
        <p className="sensors__paragraph">
          <a href="/kontakt" className="sensors__ad__link">
            Kliknij tutaj
          </a>{' '}
          i skontaktuj się z nami
        </p>
      </div>
    </main>
  );
};

export default Sensors;
