import React, { Component } from 'react';
import { Row } from 'react-materialize';
import Fuel from './fuel';
import Trip from './Trip';
import Points from './points';
import Velocity from './velocity';
import { trips } from '../data/trips';
import CircleCard from './circlecard';

export default class Dashboard extends Component {
  render() {

    return (
      <div style={{width: '80%', margin: 'auto'}}>
        <Row className={'dashboardGrid'}>
          <Velocity />
          <Trip trip={trips[0]}/>
          <Fuel />
        <Points></Points>
        <CircleCard />
        </Row>

      </div>
    );

  }
}
