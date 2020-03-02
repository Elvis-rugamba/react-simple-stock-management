/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

const Layout = Wrapper =>
  class extends Component {
    render() {
      return (
        <div className='wrapper'>
          <Wrapper />
        </div>
      );
    }
  };

export default Layout;
