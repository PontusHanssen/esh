import React, { Component } from 'react';
import { Row, Col, Card } from 'react-materialize';
import { trips } from '../data/trips.jsx';
import { Ajax } from 'react-superagent';

export default class Acceleration extends Component {
  render() {
    
	return (
      <Row>
        <Col s={12} l={12} m={12}>
          <Card>
          <Ajax url='https://httpbin.org/get' method='get'>{
            ({error, response, done}) => !done ?
              <div>loading...</div> :
              <div>loaded! {JSON.stringify(response)}</div>
          }</Ajax>

          </Card>
        </Col>
      </Row>
    );
  
  }
}