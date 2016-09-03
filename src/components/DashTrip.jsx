import React, { Component } from 'react';
import {Card, CardTitle, Col} from 'react-materialize';

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
        <ul>
          <li><i className="material-icons" style={{'vertical-align': 'middle'}}>event</i>{this.trip.time}</li>
          <li><i className="material-icons" style={{'vertical-align': 'middle'}}>schedule</i>{this.trip.duration} minutes</li>
          <li><i className="material-icons" style={{'vertical-align': 'middle'}}>place</i>{this.trip.distance} km </li>
          <li><i className="material-icons" style={{'vertical-align': 'middle'}}>ev_station</i>{this.trip.consumption} l/km</li>
          <li><strong><i className="material-icons" style={{'vertical-align': 'middle'}}>star</i>{this.trip.points} points</strong></li>
        </ul>
      </Card>
    </Col>


    );
  }
}


58.384833, 15.542284

