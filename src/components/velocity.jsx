import React, { Component } from 'react';
import {Card, Col, CardTitle, Row} from 'react-materialize';
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
    if(indexMapPoint>=75 ){ //75 Points for each trip.
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

     
     var speed =  Math.floor(Math.random() * (95 - 66)) + 66;
     this.velocityOk = speed <=  this.state.maxVelocity;
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
    
    if(this.state.conditions[0]<3){
      friction = 0.1;
    }else if(this.state.conditions[0]<7){
      friction = 0.4;
    }else{
      friction = 0.8;
    }
    
    //<Col offset={'m1'} l={4} s={4} m={4} style={{'padding-top':'104px'}}></Col>
    var style = "green";
    var title = "";
    var distance = 10;
    var reactionTime = 1; 
    var actualStoppingTime = (reactionTime*this.state.velocity/3.6 + Math.pow(this.state.velocity, 2)/250*friction);
    var possibleStoppingTime = (reactionTime*this.state.maxVelocity/3.6 + Math.pow(this.state.maxVelocity,2)/250*friction);
    var savedTime = (distance/this.state.maxVelocity - distance/this.state.velocity)*360;
    if (this.velocityOk) {
      message = <Row><Col l={8} m={12} s={12} style={{'padding-left':'0px'}}><span style={{color:'transparent'}}>test</span> <br/><div style={{'font-weight':
      'black', 'font-size':'90px'}}>{Math.ceil(actualStoppingTime)}<span style={{'font-weight':'black','font-size':'30px'}}>m</span></div></Col></Row>
      
      style = "#66bb6a";
      title="Stopping distance";
    }
    else {
      message = <Row><Col l={6} s={7} m={7}>Stopping distance (m)<br/>
        <div style={{'font-weight': 'black', 'font-size':'90px'}}>{Math.ceil(actualStoppingTime)}</div></Col>
        <Col l={6} s={5} m={5}>Saved time per 10km (s)<br/>
        <div style={{'font-weight': 'black', 'font-size':'90px'}}>{Math.ceil(savedTime)}</div></Col>
        </Row>
      
      style = "#ee6e73";
      title = "You Are Speeding";
    }

    return (
      <Col s={12} m={12} l={12}>
      <Card style={{background: style, color:'#38435a', height:'245px'}} title={title}>
      {message} 
      </Card>
    </Col>
    );
  }
}
