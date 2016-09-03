import React, { Component } from 'react';
import { Button, Cell, Card, CardTitle, CardText, CardActions, DataTable, TableHeader, Grid} from 'react-mdl';

export default class Points extends Component {
	

	constructor(){
		super();
	}	

		 

	render() {
		return (
			<Cell col={4} phone={12} tablet={6}>
				<Card className="points-card">
					<CardTitle className="points-cardtitle">
						
								<h2>Highscore</h2>
						
						
					</CardTitle>
					<DataTable rows={[
        			{name: 'Ola', points: 100},
        			{name: 'Tova', points: 99},
        			{name: 'Pontus', points: 91},
        			{name: 'Daniel Sjövall', points: 91},
    					]}>
    					<TableHeader name="name">Name</TableHeader>
    					<TableHeader numeric name="points">Points</TableHeader>
    					
						</DataTable>
				</Card>
			</Cell>
			);
	}
}