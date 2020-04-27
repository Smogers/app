import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../Article/Paragraph';
import styles from './index.module.scss';
import Bar from './Bar';

const EncyclopediaCard = ({ content }) => {
  return (
    <div className={styles.card} id={content.id}>
      <div className={styles.circleWrapper}>
        <svg
          className={styles.circle}
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="5" fill={content.color} />
        </svg>
        <h1 className={styles.header}>{content.header}</h1>
      </div>
      <Paragraph content={content.text} className={styles.paragraph} />
      {content.id === 'caqi' && <Bar />}
    </div>
  );
};

EncyclopediaCard.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string,
    header: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default EncyclopediaCard;
