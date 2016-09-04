import React, { Component } from 'react';
import {Card, CardTitle, Col, Row, Table} from 'react-materialize';

export default class CarInfo extends Component {
  render(){
    return(
      <Row className={'tripRow'}>
      <Col l={10} s={12} m={12}>
        <Card>
          <Table bordered>
          <tbody>
            <h4>Overview</h4>
            <tr>
              <td>Manufacturer</td>
              <td>Ferrari</td>
            </tr>
            <tr>
              <td>Model years</td>
              <td>2010–2015</td>
            </tr>
            <tr>
              <td>Assembly</td>
              <td>Maranello, Italy</td>
            </tr>
            <tr>
              <td>Designer</td>
              <td>Pininfarina Ferrari</td>
            </tr>
            <h4>Powertrain</h4>
            <tr>
              <td>Engine</td>
              <td>4.5 L Ferrari F136 F V8</td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td>7-speed dual-clutch</td>
            </tr>
          </tbody>
        </Table>
        </Card>
    </Col>
    </Row>
    );
  }
}
