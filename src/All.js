import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Beers from './Beers';
import Wines from './Wines';
import Sodas from './Sodas';
import Juices from './Juices';
import Water from './Water';
import Parts from './Parts';


class All extends Component {
  render() {
    return (
      <div className='product-items'>
      <Beers />
      <Wines />
      <Sodas />
      <Juices />
      <Parts />
      </div>
    )
  }
}

export default All;
