import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Input = props => {
  const { type, name, placeholder, handleChange, value } = props;
  const onInputChange = event => {
    event.preventDefault();
    handleChange({
      [event.target.name]: event.target.value,
    });
  };
  return (
    <input
      className={styles.form__input}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onInputChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string,
};
Input.defaultProps = {
  type: 'text',
  name: 'name',
  placeholder: 'Default',
  handleChange: 'Default',
  value: 'Default',
};
export default Input;
