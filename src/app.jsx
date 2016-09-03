import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory, Link } from 'react-router';
import { Content, Drawer, Icon, IconButton, Header, Layout, Menu, MenuItem, Navigation  } from 'react-mdl';
import Dashboard from './components/Dashboard';
import Trip from './components/Trip';


class App extends Component {

  render() {
    return (
      <div>
        <Layout fixedDrawer >
          <Header className="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600 is-casting-shadow">
            Stuff och massa häftig information om mer stuff
          </Header>
          <Drawer title="Title" className="mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
            <div style={{padding: 10}}>
            <div style={{display: 'flex', 'flex-direction': 'row', width: '100%', 'line-height': 32}}>
              <span>
                <Icon name="person" style={{'vertical-align': 'middle'}}/>
                test@test.com
              </span>
              <div className="mdl-layout-spacer" />
              <IconButton name="arrow_drop_down" id="user_menu" />
              <Menu target="user_menu" align="right">
                  <MenuItem>hello@example.com</MenuItem>
                  <MenuItem>info@example.com</MenuItem>
                  <MenuItem>
                    <Icon name="add" style={{'vertical-align': 'middle'}} />
                    Add another account...
                  </MenuItem>
              </Menu>
            </div>
            </div>
            <Navigation className="mdl-color--blue-grey-800">
              <a href="">Dashboard</a>
              <a href="">Timeline</a>
              <a href="">Social</a>
              <a href="">Trophies</a>
              <a href="">Car info</a>
              <a href="">Settings</a>
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
