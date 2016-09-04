import React, { Component } from 'react';
import {Card, Col} from 'react-materialize';
import { PieChart, Pie, Tooltip } from 'recharts';

const avg = 7.6;

export default class AverageFuel extends Component {

  render() {
    return (
      <Col s={12} m={6} l={4}>
      <Card className={'card1'} title="Avg Fuel Consumption">
      <span style={{'text-align': 'center', position: 'absolute', width: '90%', color: '#c0c0c0', 'font-size': '12px'}}>liters per 10 kilometer</span>
      <span style={{'font-weight': 'black', position: 'absolute', 'text-align': 'center', width: '90%', color: '#9c27b0', 'margin-top': '0px', 'font-size': '140px'}}>{avg}</span>
      </Card>
    </Col>
    );
  }
}
