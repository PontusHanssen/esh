import React, { Component } from 'react';
import {Card, Col} from 'react-materialize';
import { PieChart, Pie, Tooltip } from 'recharts';

const data01 = [{name: 'Group A', value: 400}]

export default class CircleCard extends Component {

  constructor(props) {
    super(props);
    this.state = {'percent': 80};
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      let newValue = this.state.percent - Math.floor(Math.random() * 30);
      if ((90 - newValue) > 360) newValue = 90;
      this.setState({'percent': newValue});
    }, 2000);
  }

  componentWillUmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Col s={12} m={10} l={8}>
      <Card>
      <h4>LEVEEEEL</h4>
      <span style={{position: 'absolute', 'text-align': 'center', width: '90%', 'margin-top': 95}}>{ Math.floor(((90 - this.state.percent)/360)* 100)}%</span>
        <PieChart width={200} height={200}>
          <Pie data={data01} innerRadius={70} outerRadius={100} fill="#82ca9d" startAngle={90} endAngle={this.state.percent}/>
        </PieChart>
      </Card>
    </Col>
    );
  }
}
