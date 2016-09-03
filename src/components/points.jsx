import React, { Component } from 'react';
import { Button, Cell, Card, CardTitle, CardText, CardActions, DataTable, TableHeader, Grid} from 'react-mdl';

export default class Points extends Component {
	

	constructor(){
		super();
	}	

		 

	render() {
		return (
			<div>
				<Card className="points-card">
					<CardTitle className="points-cardtitle">
						<Grid>
								<h2>Highscore</h2>
						</Grid>
						
					</CardTitle>
					<Grid>
					<DataTable rows={[
        			{name: 'Ola', points: 100},
        			{name: 'Tova', points: 99},
        			{name: 'Pontus', points: 91},
        			{name: 'Daniel Sjövall', points: 91},
    					]}>
    					<TableHeader name="name">Name</TableHeader>
    					<TableHeader numeric name="points">Points</TableHeader>
    					
						</DataTable>
						</Grid>
				</Card>
			</div>
			);
	}
}