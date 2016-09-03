import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory, Link } from 'react-router';
import { Navbar } from 'react-materialize';
import Dashboard from './components/Dashboard';
import Timeline from './components/timeline';


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
                Stuff
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
          <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
          <li><a href="#!">Second Link</a></li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Subheader</a></li>
          <li><a href="">Dashboard</a></li>
          <li><a href="">Timeline</a></li>
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
      <Route path="test" component={Timeline} />
    </Route>

  </Router>
), document.getElementById('root'));
