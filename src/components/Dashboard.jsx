import React, { Component } from 'react';
import { Row } from 'react-materialize';
import Fuel from './fuel';
import Trip from './DashTrip';

import Acceleration from './acceleration';
import Points from './points';
import Velocity from './velocity';
import { trips } from '../data/trips';
import CircleCard from './circlecard';

export default class Dashboard extends Component {
  render() {
    return (
        <Row className={'dashboardGrid'}>
          <Trip trip={trips[0]}/>
          <Fuel />
        <Points />
        <CircleCard title="Level n stuff" fill="#82ca9d" startValue={0} />
        <CircleCard title="Other n stuff" fill="#FF8042" startValue={60} />
        <CircleCard title="All the stuff" fill="#0088FE" startValue={40} />
        </Row>
      );
  }
}
