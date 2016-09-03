import React, { Component } from 'react';
import {Card, CardTitle, Col} from 'react-materialize';
export default class Trip extends Component {
  render() {
    return(
      <Col l={4} s={12} m={6}>
        <Card header={
          <CardTitle style={{height: "200px"}} image={
            "https://maps.googleapis.com/maps/api/staticmap?size=480x200&key=AIzaSyD3moXf7DqfjHWQdAtGD-3Iajitw-J2ANw&path=color:0xff0000ff%7Cweight:5%7C40.737102,-73.990318%7C40.749825,-73.987963%7C40.752946,-73.987384%7C40.755823,-73.986397"
          }> 15min Trip </CardTitle>
        }
        >
          2016-09-03 10:03 <br />
          15 min Trip<br />
          10 km <br />
          Avg. consumption 0.5l/km <br />
          <strong>Points: 257 </strong>
        </Card>
      </Col>

    );
  }
}
