import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, CardMenu, IconButton, DataTable, TableHeader} from 'react-mdl';
import {LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line} from 'recharts';
export default class Fuel extends Component {
  render() {
  	var data = [{name: '2016-01-01', value: 10}, {name: '2016-01-02', value: 30}, {name: '2016-01-03', value: 15}];

    return (
      <div>
     	<Card shadow={0} style={{width: '100%', margin: 'auto'}}>
    	<CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.publicdomainpictures.net/pictures/50000/velka/fuel-gauge.jpg) center / cover'}}>Fuel Consumption</CardTitle>
    	<CardText>
    	<LineChart width={500} height={200} data={data}
  			margin={{ top: 5, right: 50, left: 5, bottom: 5 }}>
  			<XAxis dataKey="name" />
  			<YAxis />
  			<CartesianGrid strokeDasharray="3 3" />
  			<Tooltip />
  			<Legend />
  			<Line type="monotone" dataKey="value" stroke="#8884d8" />
		</LineChart>
    	
    	</CardText>
		</Card>
      </div>
    );
  }
}
