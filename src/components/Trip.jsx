import React, { Component } from 'react';
import { Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

export default class Trip extends Component {
  render() {
    return(
      <Cell col={4}>
        <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
          <CardTitle style={{height: '176px', background: 'url(https://maps.googleapis.com/maps/api/staticmap?size=480x176&key=AIzaSyD3moXf7DqfjHWQdAtGD-3Iajitw-J2ANw&path=color:0xff0000ff%7Cweight:5%7C40.737102,-73.990318%7C40.749825,-73.987963%7C40.752946,-73.987384%7C40.755823,-73.986397) center / cover'}}>
            15 min trip
        </CardTitle>
          <CardText>
            15 min Trip<br />
            10 km
          </CardText>
          <CardActions border>
            <Button colored>Show Trip</Button>
          </CardActions>
          <CardMenu style={{color: '#000'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </Cell>

    );
  }
}
