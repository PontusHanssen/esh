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
      <Col l={4} s={12} m={12}>
        <Card className={'card2'} header={
          <CardTitle style={{color: "#000"}} image={this.trip.img}><p style={{color: '#000'}}>Last Trip</p></CardTitle>
        }
        actions={[<a onClick={() => this.setState({})}>Previous Trip</a>, <span className={"pull-right"}><a onClick={() => this.setState({})}>Next Trip</a></span>]}
      >
        <Row className={'tripRow'}>
          <Col l={12} m={6} s={6}>
            <i style={{'vertical-align': 'middle'}} className="material-icons trip-li">event</i>{this.trip.time}
          </Col>
          <Col l={12} m={6} s={6}>
            <i style={{'vertical-align': 'middle'}} className="material-icons trip-li">schedule</i>{this.trip.duration} minutes
          </Col>
          <Col l={12} m={6} s={6}>
            <i style={{'vertical-align': 'middle'}} className="material-icons trip-li">place</i>{this.trip.distance} km 
          </Col>
          <Col l={12} m={6} s={6}>
            <i style={{'vertical-align': 'middle'}} className="material-icons trip-li">ev_station</i>{this.trip.consumption} l/km
          </Col>
          <Col l={12} m={6} s={6}>
          </Col>
          <Col l={12} m={6} s={6}>
            <strong><i style={{'vertical-align': 'middle'}} className="material-icons trip-li">star</i>{this.trip.points} points</strong>
          </Col>
        </Row>
      </Card>

    </Col>


    );
  }
}
