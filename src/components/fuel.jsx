import React, { Component } from 'react';
import {Card, CardTitle, CardPanel, Button, Col} from 'react-materialize';
import {AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer} from 'recharts';

export default class Fuel extends Component {
  render() { 
  
  var data = [{name: 'mon', value: 10}, {name: 'tue', value: 30}, {name: 'wed', value: 15}, 
    {name: 'thur', value: 45}, {name: 'fri', value: 15}, {name: 'sat', value: 80}, {name: 'sun', value: 15}];
  
    return (
      <Col s={12} m={10} l={8}>
      <Card header={
        <CardTitle style={{height: "150px", overflow: "hidden"}} image={
            "http://www.publicdomainpictures.net/pictures/50000/velka/fuel-gauge.jpg"
          }> Fuel Consumption</CardTitle>}>

        <ResponsiveContainer height={200}>
        <AreaChart data={data}
          margin={{ top: 20, right: 50, left: 5, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#8884d8" />
        </AreaChart>
        </ResponsiveContainer>
        <Button className='light-blue darken-4'>Previous week</Button>  <Button className='light-blue darken-4'>Next week</Button>
      </Card>
    </Col>
    );
  }
}
