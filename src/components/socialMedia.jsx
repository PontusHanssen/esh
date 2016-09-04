import React, { Component } from 'react';
import Trip from './social-trip';
import {Card, CardTitle, Col, Row} from 'react-materialize';
import { trips } from '../data/trips';

export default class SocialMedia extends Component {

  render(){
    return(
      <div>
      <ul className="collection">
        <li className="collection-item avatar">
          <img src="../car.png" alt="" className="circle"/>
          <span class="title">Olas last trip</span>
          <Trip trip={trips}/>
        </li>
        <li className="collection-item avatar">
          <img src="../car.png" alt="" className="circle"/>
          <span class="title">Tovas last trip</span>
          <Trip trip={trips}/>
        </li>
        <li className="collection-item avatar">
          <img src="../car.png" alt="" className="circle"/>
          <span class="title">Daniel last trip</span>
          <Trip trip={trips}/>
        </li>
        <li className="collection-item avatar">
          <img src="../car.png" alt="" className="circle"/>
          <span class="title">Pontus last trip</span>
          <Trip trip={trips}/>
        </li>
      </ul>
      </div>
    );
  }
}


