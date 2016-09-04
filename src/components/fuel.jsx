import React, { Component } from 'react';
import {Card, CardTitle, CardPanel, Button, Col} from 'react-materialize';
import {AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer} from 'recharts';


export default class Fuel extends Component {
  render() { 

    var data = [{name: 'Monday', consumed: 7.0, consumedperkm: 0.6}, {name: 'Tuesday', consumed: 8.3, consumedperkm: 0.9}, {name: 'Wednesday', consumed: 7.8, consumedperkm: 4.3}, 
      {name: 'Thursday', consumed: 15.0, consumedperkm: 0.4}, {name: 'Friday', consumed: 11.2, consumedperkm: 0.3}, {name: 'Saturday', consumed: 9.3, consumedperkm: 0.4}, {name: 'Sunday', consumed: 12.0, consumedperkm: 1}];


    return (
      <Col s={12} m={12} l={8}>
        <Card className={'card2 card-graph'} style={{background: "#00acc1"}}actions={[<a href='#'>Previous week</a>, <span className={"pull-right"}><a href='#'>Next week</a></span>]} title="Fuel Consumption">
          <ResponsiveContainer height={280}>
            <AreaChart data={data}
              margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#90caf9" stopOpacity={1}/>
                <stop offset="95%" stopColor="#90caf9" stopOpacity={0.2}/>
                </linearGradient>
                <linearGradient id="gradi" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fff" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#fff" stopOpacity={0.4}/>
                </linearGradient>
              </defs>
              <XAxis hide={true} dataKey="name"/>
              <YAxis hide={true} />
              <Tooltip />
              <Area type="monotone" dataKey="consumed" stroke="#fff" fillOpacity={1} fill="url(#grad)" dot={{ stroke: '#fff', strokeWidth: 3 }} />
              <Area type="monotone" dataKey="consumedperkm" stroke="#fff" fillOpacity={1} fill="url(#gradi)" dot={{ stroke: '#fff', strokeWidth: 3 }} />

            </AreaChart>
          </ResponsiveContainer>

        </Card>
      </Col>
    );
  }
}


