import React, { Component } from 'react';
//import { Button, Cell, Card, CardTitle, CardText, CardActions, DataTable, TableHeader, Grid} from 'react-mdl';
import { Row, Col, Card, Table, CardTitle, Image } from 'react-materialize';
import {trips} from '../data/trips.jsx';

export default class Points extends Component {

  constructor(){
    super();
  }	
  render() {
    let highscore = [];

    trips.forEach(function(trip){
      highscore.push(trip.points);
    });
    highscore.sort(function(a,b) {
      return b-a; 
    });
    return (
      <Row>
        <Col s={12} m={12} l={4}>
          <Card className='white card2' title='Highscore'>
            <Table centered bordered>
              <thead>
                <tr>
                  <th data-field="name">Name</th>
                  <th data-field="points">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><i className="material-icons" style={{'vertical-align': 'middle'}}>person_outline</i>Me</td>
                  <td>{highscore[0]}</td>
                </tr>

                <tr>
                  <td>Daniel</td>
                  <td>{highscore[1]}</td>
                </tr>
                <tr>
                  <td>Pontus</td>
                  <td>{highscore[7]}</td>
                </tr>

                <tr>
                  <td>Tova</td>
                  <td>{highscore[8]}</td>
                </tr>

              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    );
  }
}
