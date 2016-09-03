import React, { Component } from 'react';
import {Card, Col} from 'react-materialize';
import request from 'superagent';
import {trips} from '../data/trips';

export default class Velocity extends Component {

  constructor(props) {
    super(props);
    this.state = {'velocity': 90, 'maxVelocity': 90, 'conditions': []};
    this.velocityOk = this.state.velocity <=  this.state.maxVelocity;
  }

  componentDidMount() {
    let indexMapPoint = 0;
    let data = [];
    let randomtrip =  Math.floor(Math.random() * (7));

    this.velocityTimer = setInterval(() => {
     
    let mappoint = trips[randomtrip].mapPoints[indexMapPoint];  
    indexMapPoint = indexMapPoint + 1; 

    if(indexMapPoint>=mappoint.length){
      indexMapPoint = 0;
    }


    request.get('http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/'+ mappoint.long + '/lat/'+ mappoint.lat + '/data.json')
      .then((res) => {
        data = JSON.parse(res.text); 
        let conditions =[];
        data.timeSeries.forEach(function(forecast){
          conditions.push(forecast.parameters[18].values[0]); //Wsymb see http://opendata.smhi.se/apidocs/metanalys/parameters.html#parameter-wsymb
        });
        this.setState({'conditions': conditions});
      });

     
     var speed =  Math.floor(Math.random() * (99 - 66)) + 66;
     this.velocityOk = speed <=  this.state.maxVelocity;
     this.setState({'velocity': speed}); 
    }, 3000);

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
    
    if(this.state.conditions[0]<3){
      friction = 0.1;
    }else if(this.state.conditions[0]<7){
      friction = 0.4;
    }else{
      friction = 0.8;
    }
          
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

    //Change message directly, as of now it can be 
    return (
      <Col s={12} m={10} l={10}>
      <Card>
      {message} 
      </Card>
    </Col>
    );
  }
}
