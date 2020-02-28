/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteItem } from '../../store/actions';
import ListItem from '../../components/list/ListItem';
import styles from './styles.scss';

class List extends Component {
  render() {
    const { items, removeItem } = this.props;
    const itemsBody = items.map((item, index) => (
      <div className={styles.list__items} key={item.id}>
        {/* <ListItem type='items' value={item.id} /> */}
        <ListItem type='items' value={item.name} />
        <ListItem type='items' value={item.price} />
        <ListItem
          type='items'
          value={
            <button type='button' onClick={() => removeItem(index)}>
              Delete
            </button>
          }
        />
      </div>
    ));
    return (
      <div className={styles.list}>
        <div className={styles.list__title}>
          {/* <ListItem type='title' value='ID' /> */}
          <ListItem type='title' value='Name' />
          <ListItem type='title' value='Price' />
          <ListItem type='title' value='Actions' />
        </div>
        {itemsBody}
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      id: PropTypes.number,
    }),
  ),

  removeItem: PropTypes.func,
};

List.defaultProps = {
  items: [{ id: 1, name: 'iPhone', price: '8000$' }],
  removeItem: 'Default',
};

const mapStateToProps = state => ({ items: state.items });

const mapDispatchToProps = dispatch => ({
  removeItem(index) {
    dispatch(deleteItem(index));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
