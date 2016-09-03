import React, { Component } from 'react';
import Fuel from './fuel';

export default class Index extends Component {
  render() {
    return (
    	<div>
      		<div>
        		<div><h1 style={{color: 'white'}}>Hello, world.</h1></div>
     		</div>
			<div>
 				<Fuel></Fuel>
 			</div>
 		</div>
    );
  }
}
