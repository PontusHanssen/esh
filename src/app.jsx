import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory, Link } from 'react-router';
import { Badge } from 'react-materialize';
import activeComponent from 'react-router-active-component'
import Dashboard from './components/Dashboard';
import Timeline from './components/timeline';
import Driving from './components/driving';
<<<<<<< HEAD
import SocialMedia from './components/socialMedia';
=======
import Trophies from './components/throphies';

>>>>>>> 4a9e5b9edc6136ee26e650c9e5199acadf789ca3
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
                CurBit
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
            <i className="material-icons sidebar-icons" style={{'vertical-align': 'middle', 'padding-left': 30}}>person</i>
            eva@demo.com
            <i className="material-icons sidebar-icons" style={{'vertical-align': 'middle', 'padding-left': 30}}>arrow_drop_down</i>
          </li>
          <li><div className="divider"></div></li>
          <li>
            <NavItem to="/" onlyActiveOnIndex>
            <i className="material-icons sidebar-icons" style={{'vertical-align': 'middle'}}>dashboard</i>
            Dashboard
          </NavItem></li>
          <li><NavItem to="/timeline">
            <i className="material-icons sidebar-icons" style={{'vertical-align': 'middle'}}>timeline</i>
            Trips
          </NavItem></li>
          <li><NavItem to="/driving">
            <i className="material-icons sidebar-icons" style={{'vertical-align': 'middle'}}>drive_eta</i>
            Driving
          </NavItem></li>
          <li><NavItem to="/socialmedia">
            <i className="material-icons sidebar-icons" style={{'vertical-align': 'middle'}}>group</i>
            <span>Social
            <Badge className="new-icon" newIcon>4</Badge></span>

          </NavItem></li>

          <li>
            <NavItem to="/trophies" onlyActiveOnIndex>
            <i className="material-icons sidebar-icons" style={{'vertical-align': 'middle'}}>star</i>
            Trophies
          </NavItem></li>
          <li><a href="#">
            <i className="material-icons sidebar-icons" style={{'vertical-align': 'middle'}}>toc</i>
            Car info
          </a></li>
          <li><a href="#">
            <i className="material-icons sidebar-icons" style={{'vertical-align': 'middle'}}>settings</i>
            Settings
          </a></li>
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
      <Route path="driving" component={Driving} />
      <Route path="socialmedia" component={SocialMedia} />
      <Route path="trophies" component={Trophies} />
    </Route>

  </Router>
), document.getElementById('root'));
