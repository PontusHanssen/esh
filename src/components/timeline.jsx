import React, { Component } from 'react';
import {Collapsible, CollapsibleItem, Card, CardTitle} from 'react-materialize';
import { trips } from '../data/trips';
import Trip from './Trip';

export default class Timeline extends Component{

  constructor(props) {
    super(props);
    this.tripComponents = trips.map((trip) => (<CollapsibleItem header={`${trip.time} ${trip.distance} km`}><Trip trip={trip} /></CollapsibleItem>));


  }

  render(){

    console.log(this.trips);

    return (
      <div style={{width: "80%", margin: "auto"}}>
        <h3>Trips</h3>
        <Collapsible>
          {this.tripComponents}
        </Collapsible>
      </div>
    );
  }
}
