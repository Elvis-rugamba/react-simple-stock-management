import React, { Component } from 'react';
import styles from './styles/content.scss';
import Form from '../../containers/form/Form';
import List from '../../containers/list/List';

class Content extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };
  }

  removeItem(index) {
    const { items } = this.state;

    this.setState({
      items: items.filter((item, i) => {
        return i !== index;
      }),
    });
  }

  render() {
    return (
      <div className={styles.grid}>
        <div className={styles.grid__title}>
          <h1>Stock Management System</h1>
        </div>
        <div className={styles.grid__item}>
          <Form />
          <List />
        </div>
      </div>
    );
  }
}

export default Content;
