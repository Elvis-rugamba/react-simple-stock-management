import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const ListItem = props => {
  const { value, type } = props;
  return type === 'title' ? (
    <div className={styles.list__item_title}>{value}</div>
  ) : (
    <div className={styles.list__item_items}>{value}</div>
  );
};

ListItem.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]),
  type: PropTypes.string,
};
ListItem.defaultProps = {
  value: 'Default value',
  type: 'title',
};
export default ListItem;
