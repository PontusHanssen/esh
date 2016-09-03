import React, { Component } from 'react';
import { Row } from 'react-materialize';
import Fuel from './fuel';
import Trip from './Trip';

import Acceleration from './acceleration';
import Points from './points';
import Velocity from './velocity';
import { trips } from '../data/trips';

export default class Dashboard extends Component {
  render() {
    return (
      <div style={{width: '80%', margin: 'auto'}}>
        <Row className={'dashboardGrid'}>
          <Velocity />
          <Trip trip={trips[0]}/>
          <Fuel />
        <Points></Points>
        <Acceleration />
        </Row>
      </div>
      );
  }
}
