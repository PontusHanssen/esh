import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory, Link } from 'react-router';
import { Navbar } from 'react-materialize';
import Dashboard from './components/Dashboard';
//import Trip from './components/Trip';


class App extends Component {

  render() {
    return (
      <div>
        <Navbar className="navbar-fixed">

        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
    </Route>

  </Router>
), document.getElementById('root'));
