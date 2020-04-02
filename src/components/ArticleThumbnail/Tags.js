import React from 'react';
import PropTypes from 'prop-types';
import './tags.module.scss';

const Tags = ({ tags }) => {
  return (
    <p className="article-thumbnail__tags">
      {tags.map((tag) => (
        <span
          key={tag}
          className="article-thumbnail__tag"
          aria-label="Znajdź inne artykuły z tym tagiem"
        >
          {`#${tag} `}
        </span>
      ))}
    </p>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
