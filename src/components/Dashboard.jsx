import React, { Component } from 'react';
import { Row } from 'react-materialize';
import Fuel from './fuel';
import Trip from './DashTrip';

import Acceleration from './acceleration';
import Points from './points';
import Velocity from './velocity';
import DrivenDistance from './drivendistance';
import { trips } from '../data/trips';
import CircleCard from './circlecard';
import CircleCardStatic from './circlecardstatic';
import LevelCard from './levelcard';
export default class Dashboard extends Component {
  render() {
    return (
        <Row className={'dashboardGrid'}>
          <Trip trip={trips}/>
          <Fuel />
                  <DrivenDistance />

        <Points />        

        <CircleCardStatic title="Fuel Consumption" text={'Your fuel consumption is lower than 86% of Linköping.'} fill="#82ca9d" startValue={300} />
        <CircleCard title="Level Progress" text={'Your progress towards next level is shown here.'} fill="#FF8042" startValue={60} />
        <LevelCard title="Level"/>
        </Row>
      );
  }
}
