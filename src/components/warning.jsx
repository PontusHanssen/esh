import React, { Component } from 'react';
import { Button, Card, CardTitle, CardPanel, Col, Row} from 'react-materialize';
import request from 'superagent';
import {trips} from '../data/trips';

export default class Warning extends Component {
  
  constructor(props){
    super(props);
    this.state={'conditions':[]};
  }

  componentDidMount(){
    let indexMapPoint = 0;
    let randomTrip = Math.floor(Math.random()* (7));

    this.requestTimer = setInterval(() => {
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

  render() { 
    return (
      <Col s={12} m={12} l={12}>
        <Card className={'card2'} title="Weather warnings">
          <Row>
            <Col s={3} m={3} l={3}>
              <img src="https://getmdl.io/templates/dashboard/images/user.jpg" alt="" className="circle responsive-img" />
            </Col>
            <Col s={3} m={3} l={3}>
              <img src="https://getmdl.io/templates/dashboard/images/user.jpg" alt="" className="circle responsive-img" />
 
            </Col>
            <Col s={3} m={3} l={3}>
              <img src="https://getmdl.io/templates/dashboard/images/user.jpg" alt="" className="circle responsive-img" />             
            </Col>
            <Col s={3} m={3} l={3}>
              <img src="https://getmdl.io/templates/dashboard/images/user.jpg" alt="" className="circle responsive-img" />
            </Col>
          </Row>
        </Card>
      </Col>
    );
  }
}
