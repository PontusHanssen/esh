import React, { Component } from 'react';
import {Card, CardTitle, CardPanel, Button, Col} from 'react-materialize';
import {BarChart, Bar, XAxis, YAxis, Tooltip, Area, ResponsiveContainer} from 'recharts';


export default class DrivenDistance extends Component {
  render() { 

    var data = [{name: 'Monday', km: 100}, {name: 'Tuesday', km: 124}, {name: 'Wednesday', km: 80}, 
      {name: 'Thursday', km: 114}, {name: 'Friday', km: 50}, {name: 'Saturday', km: 280}, {name: 'Sunday', km: 63}];


    return (
      <Col s={12} m={12} l={8}>
        <Card className={'card2'} style={{background: "#82ca9d"}}actions={[<a href='#'>Previous week</a>, <span className={"pull-right"}><a href='#'>Next week</a></span>]} title="Driven Distance">
          <ResponsiveContainer height={280}>
            <BarChart data={data}
              margin={{ top: 20, right: 0, left: 0, bottom: 0 }} >
              
              <XAxis hide={true} dataKey="name"/>
              <YAxis hide={true} />
              <Tooltip />
              <Bar dataKey="km" fillOpacity={1} fill="#FF8042" />
            </BarChart>
          </ResponsiveContainer>

        </Card>
      </Col>
    );
  }
}


