import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem } from '../../store/actions';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import styles from './styles.scss';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      price: '',
    };

    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    const { createItem } = this.props;
    createItem(this.state);
    this.setState(this.initialState);
  }

  handleChange(item) {
    this.setState(() => item);
  }

  render() {
    const { name, price } = this.state;
    const { errors } = this.props;

    return (
      <form className={styles.form} onSubmit={this.onFormSubmit}>
        <h1 className={styles.form__title}>Add an item</h1>
        <Input
          type='text'
          name='name'
          placeholder='Name...'
          value={name}
          handleChange={this.handleChange}
        />
        <Input
          type='text'
          name='price'
          placeholder='Price...'
          value={price}
          handleChange={this.handleChange}
        />
        <div className={styles.form__error}>
          {errors && errors.name
            ? 'Field name is required'
            : 'Field price is required'}
        </div>
        <Button type='submit' value='Create' />
      </form>
    );
  }
}

Form.propTypes = {
  createItem: PropTypes.func,
  errors: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.bool,
      price: PropTypes.bool,
    }),
  ),
};
Form.defaultProps = {
  createItem: 'text',
  errors: { name: false, price: false },
};

const mapStateToProps = state => ({ items: state.items, errors: state.errors });

const mapDispatchToProps = dispatch => ({
  createItem(item) {
    dispatch(addItem(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
