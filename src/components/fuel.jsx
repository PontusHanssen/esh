import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, CardMenu, IconButton, DataTable, TableHeader, Button, Cell} from 'react-mdl';
import {AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area} from 'recharts';
export default class Fuel extends Component {
  render() {
  	var data = [{name: 'mon', value: 10}, {name: 'tue', value: 30}, {name: 'wed', value: 15}, 
    {name: 'thur', value: 45}, {name: 'fri', value: 15}, {name: 'sat', value: 80}, {name: 'sun', value: 15}];

    return (
      <Cell phone={1} tablet={4}>
     	<Card shadow={0}>
    	<CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.publicdomainpictures.net/pictures/50000/velka/fuel-gauge.jpg) center / cover'}}>Fuel Consumption</CardTitle>
    	<CardText>
    	<AreaChart width={500} height={200} data={data}
  			margin={{ top: 5, right: 50, left: 5, bottom: 5 }}>
  			<XAxis dataKey="name" />
  			<YAxis />
  			<CartesianGrid strokeDasharray="3 3" />
  			<Tooltip />
  			<Area type="monotone" dataKey="value" stroke="#8884d8" />
		</AreaChart>
    	
    	</CardText>
		</Card>
    </Cell>
    );
  }
}
