import React, { Component } from 'react';

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
				<form>
					<input type='text' value={value} onChange={this.handleChange} />
				</form>
				<p>{value}</p>
			</div>
		);
	}
}

export default Form;
