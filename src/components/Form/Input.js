import React from 'react';
import PropTypes from 'prop-types';
import './input.module.scss';
import withLabel from './withLabel';

const Input = ({ name, type, placeholder, value, onChange }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className="form__input"
      value={value}
      required
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
Input.defaultProps = {
  placeholder: '',
  type: 'text',
};
Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default withLabel(Input);
