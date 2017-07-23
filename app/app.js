import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducers from './reducers';
import AppBar from 'material-ui/AppBar';

import styles from './app.css';
import SideNav from './containers/SideNav';
import ArticleList from './containers/ArticleList';
import Banner from './components/Banner';
import SideContents from './containers/SideContents';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: true };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    const { open } = this.state;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <AppBar
            style = {{ backgroundColor: '#385972' }}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onTouchTap={this.handleToggle}
          />
          <SideNav
            open={open}
            handleToggle={this.handleToggle}
          />
          <Banner />
          <Grid fluid style={{ paddingLeft: '0' }}>
            <Row>
              <Col lg={2} style={{ padding: '0', background: 'rgba(0,0,0,.1)' }}>
                <SideContents />
              </Col>
              <Col lg={10}>
                <div>
                  <ArticleList />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('app')
);