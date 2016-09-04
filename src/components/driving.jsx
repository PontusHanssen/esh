import React, { Component } from 'react';
import { Row } from 'react-materialize';
import Velocity from './velocity';
import Warning from './warning';
export default class Driving extends Component {
  render() {
    return (
        <Row className={'dashboardGrid'}>
          <Velocity />
          <Warning />
        </Row>
      );
  }
}
