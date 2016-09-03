import React, { Component } from 'react';
import {Collapsible, CollapsibleItem} from 'react-materialize';
import { trips } from '../data/trips';

export default class Timeline extends Component{

  constructor(props) {
    super(props);
    
  }

  render(){

    return (
      <div style={{width: "80%", margin: "auto"}}>
        <h1>Timeline</h1>
        <Collapsible>
          <CollapsibleItem header={"2016-08-01 10km"}>
            Derp herp
          </CollapsibleItem>
        </Collapsible>
      </div>
    );
  }
}

