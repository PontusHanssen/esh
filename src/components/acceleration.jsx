import React, { Component } from 'react';
import { Row, Col, Card } from 'react-materialize';
import { trips } from '../data/trips.jsx';
import request from 'superagent';

export default class Acceleration extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {'conditions': []};
  }

  componentDidMount(){
    let data = [];
    request.get('http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/13.11953/lat/58.52556/data.json')
      .then((res) => {
        data = JSON.parse(res.text); //Wsymb see http://opendata.smhi.se/apidocs/metanalys/parameters.html#parameter-wsymb
      
        let conditions =[]; 
        let i = 0;
        data.timeSeries.forEach(function(forecast){
          conditions.push(forecast.parameters[18].values[0]);
        });
        this.setState({'conditions': conditions});
      });
  }

  render() {
    
	return (
      <Row>
        <Col s={12} l={12} m={12}>
          <Card>
          </Card>
        </Col>
      </Row>
    );
  
  }
}