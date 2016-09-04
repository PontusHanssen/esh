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
      <Col l={4} s={6} m={4} className="timeline-div">
        <img src={this.trip.img} />
        <ul>
          <li><i className="material-icons" style={{'vertical-align': 'middle'}}>event</i>{this.trip.time}</li>
          <li><i className="material-icons" style={{'vertical-align': 'middle'}}>schedule</i>{this.trip.duration} minutes</li>
          <li><i className="material-icons" style={{'vertical-align': 'middle'}}>place</i>{this.trip.distance} km </li>
          <li><i className="material-icons" style={{'vertical-align': 'middle'}}>ev_station</i>{this.trip.consumption} l/km</li>
          <li><strong><i className="material-icons" style={{'vertical-align': 'middle'}}>star</i>{this.trip.points} points</strong></li>
        </ul>
    </Col>


    );
  }
}


58.384833, 15.542284
