import React, { Component } from 'react';
import {Card, Col} from 'react-materialize';

export default class Velocity extends Component {

  constructor(props) {
    super(props);
    this.state = {'velocity': 90, 'maxVelocity': 90};
    this.velocityOk = this.state.velocity <=  this.state.maxVelocity;
  }

  componentDidMount() {
    this.velocityTimer = setInterval(() => {
     var speed =  Math.floor(Math.random() * (99 - 91)) + 91;
     this.velocityOk = this.state.velocity <=  speed;
     this.setState({'velocity': speed}); 
    }, 5000);
    this.maxSpeedTimer = setInterval(() => {
      var maxSpeed = Math.floor(Math.random() * (90 - 69)) + 69;
      this.velocityOk = this.state.velocity <=  maxSpeed;
      this.setState({'maxVelocity': maxSpeed});
    },10000);
  }

  componentWillUmount() {
    clearInterval(this.velocityTimer);
    clearInterval(this.maxSpeedTimer);
  }

  render() {
    var message = ""; 
    var friction = 0.8;
    var distance = 10;
    var reactionTime = 1; 
    var actualStoppingTime = (reactionTime*this.state.velocity/3.6 + Math.pow(this.state.velocity, 2)/250*friction);
    var possibleStoppingTime = (reactionTime*this.state.maxVelocity/3.6 + Math.pow(this.state.maxVelocity,2)/250*friction);
    var savedTime = (distance/this.state.maxVelocity - distance/this.state.velocity)*360;
    if (this.velocityOk) {
      message = <div><h4 style={{color: "green"}}>VELOCITY OK</h4></div>;
    }
    else {
      message = <div><h4 style={{color: "red"}}>YOU ARE SPEEDING</h4>
      Increased stopping distance (m): <h5>{Math.floor(actualStoppingTime - possibleStoppingTime)}</h5> 
      Saved time driving 10 km (s): <h5>{Math.floor(savedTime)}</h5></div>;
    }
    return (
      <Col s={12} m={10} l={10}>
      <Card>
      {message}
      </Card>
    </Col>
    );
  }
}
