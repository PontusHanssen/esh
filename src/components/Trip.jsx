import React, { Component } from 'react';
import {Card, CardTitle, Col} from 'react-materialize';

export default class Trip extends Component {
  constructor(props){
    super(props);

    this.trip = this.props.trip;
    this.trip.img = "https://maps.googleapis.com/maps/api/staticmap?size=480x180&key=AIzaSyD3moXf7DqfjHWQdAtGD-3Iajitw-J2ANw&path=color:0xff0000ff" + this.trip.mapPoints.map((point) => 
      `${point.lat},${point.long}`
    ).join('|');

  }

  render(){
    return(
      <Col l={12} s={12} m={12}>
        <Card header={
          <CardTitle style={{color: "#000"}} image={this.trip.img}></CardTitle>
        }>
        <ul>
          <li>{this.trip.time}</li>
          <li>{this.trip.duration} minutes</li>
          <li>{this.trip.distance} km </li>
          <li>{this.trip.consumption} l/km</li>
          <li><strong>{this.trip.pointsi} points</strong></li>
        </ul>
      </Card>
    </Col>


    );
  }
}


58.384833, 15.542284

