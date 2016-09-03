import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import { Content, Drawer, Header, Layout, Navigation } from 'react-mdl';
import Index from './components/index';

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
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="test" component={Index} />
    </Route>
  </Router>
), document.getElementById('root'));
