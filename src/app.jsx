import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory, Link } from 'react-router';
import { Content, Drawer, Header, Layout, Navigation } from 'react-mdl';
import Dashboard from './components/Dashboard';
import Trip from './components/Trip';

class App extends Component {

  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
        <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
          <Header transparent title="Title" style={{color: 'white'}}>
            <Navigation>
              <a href="">Link</a>
              <a href="">Link</a>
              <a href="">Link</a>
              <a href="">Link</a>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a href="">Link</a>
              <a href="">Link</a>
              <a href="">Link</a>
              <a href="">Link</a>
            </Navigation>
          </Drawer>
        </Layout>
          <Content style={{ width: '100%', top: '310px', position: 'absolute'}}>
            {this.props.children}
          </Content>
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="test" component={Trip} />
    </Route>
  </Router>
), document.getElementById('root'));
