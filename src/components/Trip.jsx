import React, { Component } from 'react';
import { Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

export default class Trip extends Component {
  render() {
    return(
      <Cell col={4} phone={12} tablet={6}>
        <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
          <CardTitle style={{height: '176px', background: 'url(https://maps.googleapis.com/maps/api/staticmap?size=480x176&key=AIzaSyD3moXf7DqfjHWQdAtGD-3Iajitw-J2ANw&path=color:0xff0000ff%7Cweight:5%7C40.737102,-73.990318%7C40.749825,-73.987963%7C40.752946,-73.987384%7C40.755823,-73.986397) center / cover'}}>
            15 min trip
        </CardTitle>
          <CardText>
            2016-09-03 10:03 <br />
            15 min Trip<br />
            10 km <br />
            Avg. consumption 0.5l/km <br />
            <strong>Points: 257 </strong>
          </CardText>
          <CardActions border>
            <Button colored>Show More</Button>
          </CardActions>
          <CardMenu >
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </Cell>

    );
  }
}
