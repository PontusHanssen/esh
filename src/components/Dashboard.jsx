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
        <Row className={'dashboardGrid'}>
          <Velocity />
          <Trip trip={trips[0]}/>
          <Fuel />
        <Points></Points>
        </Row>
      );
  }
}
