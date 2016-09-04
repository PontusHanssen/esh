import React, { Component } from 'react';
import { Button, Card, CardTitle, CardPanel, Col, Row} from 'react-materialize';
import request from 'superagent';
import {trips} from '../data/trips';

export default class Warning extends Component {
  
  constructor(props){
    super(props);
    this.state={'conditions':[]};
  }
/*
  componentDidMount(){
    
    let indexMapPoint = 0;
    let randomtrip = Math.floor(Math.random()* (7));
    let data = [];
    this.requestTimer = setInterval(() => {
      
      this.roadConditionOpacity = 0.04;
      this.queueOpacity = Math.random();
      this.roadConstructionOpacity = Math.random();
      this.accidentOpacity = Math.random();
      
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
    }, 5000);
  }

  componentWillUnmount(){
    clearInterval(this.requestTimer);
  }
*/
  render() { 


    if(this.state.conditions[0]>=5){
      this.roadConditionOpacity = 1;
      
    }else{
      this.roadConditionOpacity = 0.04;      
    }

    if(this.accidentOpacity > 0.5){
      this.accidentOpacity = 1;
    }else{
      this.accidentOpacity = 0.04;
    }


    if(this.queueOpacity > 0.5){
      this.queueOpacity = 1;
    }else{
      this.queueOpacity = 0.04;
    }

    if(this.roadConstructionOpacity > 0.5){
      this.roadConstructionOpacity = 1;
    }else{
      this.roadConstructionOpacity = 0.04;
    }
    return (
      <Col s={12} m={12} l={12}>
        <Card style={{height:'270px;'}} title="Warnings">
          <Row>
            <Col s={3} m={3} l={3}>
              <img style={{'max-height':'200px', opacity: this.roadConditionOpacity}} src="../../slippery-road.png" alt="accident" className="responsive-img" />
            </Col>
            <Col s={3} m={3} l={3}>
              <img style={{'max-height':'200px', opacity: this.accidentOpacity}} src="../../accident.png" alt="" className="responsive-img" />
 
            </Col>
            <Col s={3} m={3} l={3}>
              <img style={{'max-height':'200px', opacity: this.queueOpacity}} src="../../queue.png" alt="" className="responsive-img" />             
            </Col>
            <Col s={3} m={3} l={3}>
              <img style={{'max-height':'200px', opacity: this.roadConstructionOpacity}} src="../../road-construction.png" alt="" className="responsive-img" />
            </Col>
          </Row>
        </Card>
      </Col>
    );
  }
}
