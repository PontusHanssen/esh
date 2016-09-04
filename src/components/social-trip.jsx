import React, { Component } from 'react';
import {Card, CardTitle, Col, Row} from 'react-materialize';

export default class Trip extends Component {
  constructor(props){
    super(props);

    this.trips = this.props.trip;
    this.trip = this.trips[0];

  }

  render(){

    this.trip = this.trips[Math.floor(Math.random() * this.trips.length)];

    this.trip.img = "https://maps.googleapis.com/maps/api/staticmap?size=480x180&key=AIzaSyD3moXf7DqfjHWQdAtGD-3Iajitw-J2ANw&path=color:0xff0000ff" + this.trip.mapPoints.map((point) =>
      `${point.lat},${point.long}`
    ).join('|');
      return(
        <div> 
        <Row>
          <Col s={12} l={12} m={12}>
            <img src={this.trip.img} style={{'max-width':'240px', 'max-height':'240px'}} alt=""/>
          </Col>
        </Row> 
    </div>
    );
  }
}
