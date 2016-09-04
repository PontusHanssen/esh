import React, { Component } from 'react';
import {Card, Col} from 'react-materialize';
import { PieChart, Pie, Tooltip } from 'recharts';

export default class LevelCard extends Component {


  render() {
    return (
      <Col s={6} m={6} l={4}>
      <Card className={'card1'} title={this.props.title}>
        {this.props.text}
        <br />
        <div className={'circleJerk'}><p>7</p></div>
      </Card>
    </Col>
    );
  }
}
