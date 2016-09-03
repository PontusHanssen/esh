import React, { Component } from 'react';
import {Card, CardTitle, CardPanel, Button, Col} from 'react-materialize';
import {AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area} from 'recharts';

export default class Fuel extends Component {
  render() { 
  
  var data = [{name: 'mon', value: 10}, {name: 'tue', value: 30}, {name: 'wed', value: 15}, 
    {name: 'thur', value: 45}, {name: 'fri', value: 15}, {name: 'sat', value: 80}, {name: 'sun', value: 15}];
  
    return (
      <Col s={12} m={8} l={4}>
      <Card>
      <CardTitle image="fuel.jpg">Fuel Consumption</CardTitle>
      <AreaChart width={400} height={150} data={data}
        margin={{ top: 20, right: 50, left: 5, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#8884d8" />
      </AreaChart>
      </Card>
    </Col>
    );
  }
}
