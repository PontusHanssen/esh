import React, { Component } from 'react';
import {Card, CardTitle, Col, Row} from 'react-materialize';

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
      <Col l={4} s={6} m={4} className="timeline-div">
        <img src={this.trip.img} />
        <Row className={'tripRow'}>
          <Col l={6} m={6} s={6}>
            <i style={{'vertical-align': 'middle'}} className="material-icons trip-li">event</i>{this.trip.time}
          </Col>
          <Col l={6} m={6} s={6}>
            <i style={{'vertical-align': 'middle'}} className="material-icons trip-li">schedule</i>{this.trip.duration} minutes
          </Col>
          <Col l={6} m={6} s={6}>
            <i style={{'vertical-align': 'middle'}} className="material-icons trip-li">place</i>{this.trip.distance} km
          </Col>
          <Col l={6} m={6} s={6}>
            <i style={{'vertical-align': 'middle'}} className="material-icons trip-li">ev_station</i>{this.trip.consumption} l/km
          </Col>
          <Col l={6} m={6} s={6}>
          </Col>
          <Col l={6} m={6} s={6}>
            <strong><i style={{'vertical-align': 'middle'}} className="material-icons trip-li">star</i>{this.trip.points} points</strong>
          </Col>
        </Row>
    </Col>
    );
  }
}


58.384833, 15.542284
