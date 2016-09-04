import React, { Component } from 'react';


export const FuelTooltip = (props) => {
  if (props.active) {
    return (
      <div className="custom-tooltip">
        <p className="day">{`${props.label}`}</p>
        <p className="label">{`Total : ${props.payload[0].value} l/km`}</p>
        <p className="label">{`Average : ${props.payload[1].value} l/km`}</p>
      </div>
    );
  }
  return null;
}
