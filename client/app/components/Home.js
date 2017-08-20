// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Meteor, { createContainer } from 'electron-meteor';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.rates.map(function(rate, idx) {
          return <Button key={idx} color="primary">{rate.rate}</Button>
        })}
      </div>
    );
  }
}

export default createContainer(params => {
  Meteor.subscribe('rates');

  return {
    rates: Meteor.collection('rates').find()
  };
}, Home)
