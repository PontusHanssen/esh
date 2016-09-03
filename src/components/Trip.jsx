import React, { Component } from 'react';
import {Card, CardTitle, Col} from 'react-materialize';
export default class Trip extends Component {
  render() {
    return(
      <Col l={6} s={12} m={6}>
        <Card header={
          <CardTitle style={{color: "#000"}} image={
            "https://maps.googleapis.com/maps/api/staticmap?scale=2&size=400x150&key=AIzaSyD3moXf7DqfjHWQdAtGD-3Iajitw-J2ANw&path=color:0xff0000ff%7Cweight:5%7C40.737102,-73.990318%7C40.749825,-73.987963%7C40.752946,-73.987384%7C40.755823,-73.986397"
          }></CardTitle>
        }
        >
          <h1>15 min trip</h1>
          <h4>
          2016-09-03 10:03 <br />
          15 min Trip<br />
          10 km <br />
          Fuel 0.5 l/km <br />
          <strong>Points: 257 </strong>
        </h4>
        </Card>
      </Col>

    );
  }
}
