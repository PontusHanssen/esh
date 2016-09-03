import React, { Component } from 'react';
import { Row } from 'react-materialize';
import Fuel from './fuel';
import Trip from './Trip';
//import Fuel from './fuel';
import Points from './points';
import { trips } from '../data/trips';

export default class Dashboard extends Component {
  render() {

    return (
      <div style={{width: '80%', margin: 'auto'}}>
        <Row className={'dashboardGrid'}>
          <Trip trip={trips[0]}/>
          <Fuel />
        </Row>
        <Points></Points>
      </div>
    );

  }
}
