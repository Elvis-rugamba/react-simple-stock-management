import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Button = props => {
	const { type, value } = props;
	return <input className={styles.form__button} type={type} value={value} />;
};

Button.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string,
};
Button.defaultProps = {
	type: 'text',
	value: 'Default',
};
export default Button;
