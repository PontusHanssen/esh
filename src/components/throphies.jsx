import React, {Component} from 'react';
import {Row, Col, Card, CardTitle} from 'react-materialize';


export default class Trophie extends Component {

  render() {
    return (

      <Row>
        <Col s={4} m={2} l={2}>
          <Card className={'trophyCard'} header={
            <CardTitle style={{height: 150, padding: '10px', color: "#000"}} image={"medal1.png"}><p style={{color: '#000'}}></p></CardTitle>}>
            <span>Low Fuel Consumption Level 2</span>
            </Card>
          </Col>
        <Col s={4} m={2} l={2}>
          <Card className={'trophyCard'} header={
            <CardTitle style={{height: 150, color: "#000", padding: 10}} image={"medal2.png"}><p style={{color: '#000'}}></p></CardTitle>}>
            <span>Low Fuel Consumption Level 2</span>
            </Card>
          </Col>
        </Row>
    );
  }
}
