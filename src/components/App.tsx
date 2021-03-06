import React, { FC } from 'react';
import {
  Route,
  HashRouter as Router,
  Switch,
} from 'react-router-dom';
import './App.css';
import Config from '../routes/Config';
import Home from '../routes/Home';
import WorldStatus from '../routes/WorldStatus';
import { Global, css } from '@emotion/react';
import { Colors } from '../contants';

const App: FC = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/world-status">
            <WorldStatus />
          </Route>
          <Route exact path="/config">
            <Config />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

const globalStyle = css`
  body {
    background: ${Colors.LIGHT_GRAY};
  }
  a {
    text-decoration: none;
    color: #000;
    &:visited {
      color: #000;
    }
  }
`;
