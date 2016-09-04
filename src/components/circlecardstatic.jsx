import React, { Component } from 'react';
import {Card, Col} from 'react-materialize';
import { PieChart, Pie, Tooltip } from 'recharts';

const data01 = [{name: 'Group A', value: 400}]

export default class CircleCardStatic extends Component {

  constructor(props) {
    super(props);
    this.state = {'percent': 80 - props.startValue};
  }

  render() {
    return (
      <Col s={6} m={6} l={4}>
      <Card className={'card1'} title={this.props.title}>
        {this.props.text}
        <br />
      <span style={{position: 'absolute', color: '#666666', 'text-align': 'center', width: '90%', 'margin-top': '65px', 'font-size': '50px'}}>{ Math.floor(((90 - this.state.percent)/360)* 100)}%</span>
        <PieChart width={200} height={200}>
          <Pie data={data01} innerRadius={70} outerRadius={100} fill={this.props.fill} startAngle={90} endAngle={this.state.percent}/>
        </PieChart>
      </Card>
    </Col>
    );
  }
}
