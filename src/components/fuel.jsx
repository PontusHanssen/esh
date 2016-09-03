import React, { Component } from 'react';
import {Card, CardTitle, CardPanel, Button, Col} from 'react-materialize';
import {AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer} from 'recharts';

export default class Fuel extends Component {
  render() { 

    var data = [{name: 'mon', value: 7.0}, {name: 'tue', value: 8.3}, {name: 'wed', value: 7.8}, 
      {name: 'thur', value: 15.0}, {name: 'fri', value: 11.2}, {name: 'sat', value: 9.3}, {name: 'sun', value: 12.0}];

    return (
      <Col s={6} m={4} l={4}>
        <Card actions={[<a href='#'>Previous week</a>, <a href='#'>Next week</a>]}>
          <h3>Fuel Consumption</h3>
          <ResponsiveContainer height={200}>
            <AreaChart data={data}
              margin={{ top: 20, right: 50, left: 5, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area fill="#1e88e5" type="monotone" dataKey="value" stroke="#0d47a1" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </Col>
    );
  }
}
