import React, { Component } from 'react';
import styles from './form.scss';

class Form extends Component {
	constructor() {
		super();

		this.state = {
			value: '',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const { value } = event.target;
		this.setState(() => ({
			value,
		}));
	}

	render() {
		const { value } = this.state;
		return (
			<div>
				<form className={styles.form}>
					<input
						className={styles.input}
						type='text'
						value={value}
						onChange={this.handleChange}
					/>
				</form>
				<p className={styles.paragraph}>{value}</p>
			</div>
		);
	}
}

export default Form;
