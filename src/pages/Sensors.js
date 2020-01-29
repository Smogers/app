/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Sensors = () => (
  <main className="content">
    <h1>Nasze czujniki</h1>
    <div className="card sensor">
      <img
        src="https://picsum.photos/105/100"
        alt="Czujnik"
        className="sensor__img"
      />
      <div className=" sensor__label">
        <p>
          Enim consectetur id occaecat minim magna pariatur esse qui non veniam
          consequat elit aute.
        </p>
      </div>
    </div>
    <div className="card sensor__info">
      <h3 className="sensor__info__header">Lorem ipsum</h3>
      <p className="sensor__info__paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis
        architecto aliquam quia, dolorem quidem!
      </p>
    </div>
    <div className="card sensor__ad">
      <h3 className="sensor__ad__header">Zainteresowany kupnem?</h3>
      <p className="sensor__ad__paragraph">
        <a href="/kontakt" className="sensor__ad__link">
          Kliknij tutaj
        </a>{' '}
        i wypełnij formularz kontaktowy
      </p>
    </div>
  </main>
);

export default Sensors;
