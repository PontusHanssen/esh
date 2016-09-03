import React, { Component } from 'react';
//import { Button, Cell, Card, CardTitle, CardText, CardActions, DataTable, TableHeader, Grid} from 'react-mdl';
import { Row, Col, Card, Table, CardTitle, Image } from 'react-materialize';

export default class Points extends Component {
	

	constructor(){
		super();
	}	
	
	render() {
		return (
			<Row>
				<Col s={12} m={12} l={6}>
					 <Card className='blue-grey' textClassName='white-text'>
					 <h2 className="center-text">Highscore</h2>
    					<Table centered bordered>
  							<thead>
    							<tr>
      							<th data-field="name">Name</th>
      							<th data-field="points">Points</th>
    							</tr>
  							</thead>
  							<tbody>
    							<tr>
      							<td>Ola</td>
      							<td>200</td>
   							 </tr>

    							<tr>
      							<td>Ola</td>
      							<td>200</td>
   							 </tr>

    							<tr>
      							<td>Ola</td>
      							<td>200</td>
   							 </tr>

    							<tr>
      							<td>Ola</td>
      							<td>200</td>
   							 </tr>
  							</tbody>
							</Table>
    				</Card>
				</Col>
			</Row>
			);
	}
}
