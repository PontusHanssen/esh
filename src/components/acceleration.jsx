import React, { Component } from 'react';
import { Row, Col, Card } from 'react-materialize';
import { trips } from '../data/trips.jsx';

export default class Acceleration extends Component {
  render() {
    
	return (
      <Row>
        <Col s={12} l={12} m={12}>
          <Card>
            <p>The trip on {trips[0].time} you braked too hard {trips[0].hardBreaks} times.</p> <br/>
            <p>The trip on {trips[1].time} you braked too hard {trips[1].hardBreaks} times.</p> <br/>
            <p>The trip on {trips[2].time} you braked too hard {trips[2].hardBreaks} times.</p> <br/>
            <p>The trip on {trips[3].time} you braked too hard {trips[3].hardBreaks} times.</p> <br/>
            <p>The trip on {trips[4].time} you braked too hard {trips[4].hardBreaks} times.</p> <br/>
            <p>The trip on {trips[5].time} you braked too hard {trips[5].hardBreaks} times.</p> <br/>
            <p>The trip on {trips[6].time} you braked too hard {trips[6].hardBreaks} times.</p> <br/>
          </Card>
        </Col>
      </Row>
    );
  
  }
}
