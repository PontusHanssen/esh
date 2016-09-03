import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory, Link } from 'react-router';
import { } from 'react-materialize';
import activeComponent from 'react-router-active-component'
import Dashboard from './components/Dashboard';
import Timeline from './components/timeline';

let NavItem = activeComponent('li')


class App extends Component {

  componentDidMount() {
    $(".button-collapse").sideNav({edge: 'left'});
  }

  componentWillUnmount() {
    store.removeListener('component', this.onChange);
  }

  render() {
    return (
      <div>
      <header>
        <nav className="top-nav">
          <div className="container">
            <div className="nav-wrapper">
              <a className="page-title">
                Ferrari, 56 mil :)
              </a>
            </div>
          </div>
        </nav>
        <div className='container'>
          <a href='#' data-activates='nav-mobile' className='button-collapse top-nav full hide-on-large-only'>
            <i className='material-icons'>menu</i>
          </a>
        </div>
        <ul id="nav-mobile" className="side-nav fixed">
          <li>
            <div style={{'padding-left': 60, 'padding-top': 20}}>
              <img src="https://getmdl.io/templates/dashboard/images/user.jpg" alt="" className="circle responsive-img" />
            </div>
          </li>
          <li>
            <i className="material-icons" style={{'vertical-align': 'middle', 'padding-left': 20, 'padding-right': 5}}>person</i>
            test@test.com
            <i className="material-icons" style={{'vertical-align': 'middle'}}>arrow_drop_down</i>
          </li>
          <li><div className="divider"></div></li>
          <li><NavItem to="/" onlyActiveOnIndex>Dashboard</NavItem></li>
          <li><NavItem to="/timeline">Timeline</NavItem></li>
          <li><a href="">Social</a></li>
          <li><a href="">Trophies</a></li>
          <li><a href="">Car info</a></li>
          <li><a href="">Settings</a></li>
        </ul>
      </header>
        <div className="main">
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="timeline" component={Timeline} />
    </Route>

  </Router>
), document.getElementById('root'));
