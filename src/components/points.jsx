import React, { Component } from 'react';
//import { Button, Cell, Card, CardTitle, CardText, CardActions, DataTable, TableHeader, Grid} from 'react-mdl';
import { Row, Col, Card, Table, CardTitle, Image } from 'react-materialize';
import {trips} from '../data/trips.jsx';

export default class Points extends Component {
		constructor(){
		super();
	}	
	render() {
		trips.forEach(function (trip){
			console.log(trip.points);
		});

		return (
			<Row>
				<Col s={12} m={12} l={6}>
					 <Card className='white'>
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
      							<td>{trips[0].points}</td>
   							 </tr>

    							<tr>
      							<td>Daniel</td>
      							<td>{trips[1].points}</td>
   							 </tr>
    							<tr>
      							<td>Pontus</td>
      							<td>{trips[2].points}</td>
   							 </tr>

    							<tr>
      							<td>Tova</td>
      							<td>{trips[3].points}</td>
   							 </tr>

    							<tr>
      							<td>Jigin</td>
      							<td>{trips[4].points}</td>
   							 </tr>

    							<tr>
      							<td>Sjövall</td>
      							<td>{trips[5].points}</td>
   							 </tr>

    							<tr>
      							<td>Karl</td>
      							<td>{trips[6].points}</td>
   							 </tr>
  							</tbody>
							</Table>
    				</Card>
				</Col>
			</Row>
			);
	}
}
