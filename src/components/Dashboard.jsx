import React, { Component } from 'react';
import { Row } from 'react-materialize';
import Fuel from './fuel';
import Trip from './Trip';
import Points from './points';
import Velocity from './velocity';

export default class Dashboard extends Component {
  render() {
    
	return (
      <div style={{width: '80%', margin: 'auto'}}>
        <Row className={'dashboardGrid'}>
                  <Velocity />

          <Trip />
		  <Fuel />
        </Row>
        <Points></Points>

      </div>
    );
  
  }
}
