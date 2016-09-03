import React, { Component } from 'react';
import {Card, Col} from 'react-materialize';

export default class Velocity extends Component {

  constructor(props) {
    super(props);
    this.maxVelocity = 90;
    this.state = {'velocity': 90};
  }

  componentDidMount() {
    setInterval(() => {
     var speed =  Math.floor(Math.random() * (99 - 84)) + 84; 
     this.setState({'velocity': speed}); 
    }, 3000);
  }


  componentWillUmount() {}

  render() { 
    return (
      <Col s={12} m={10} l={8}>
      <Card>
        <h1>{this.state.velocity}</h1>
      </Card>
    </Col>
    );
  }
}
