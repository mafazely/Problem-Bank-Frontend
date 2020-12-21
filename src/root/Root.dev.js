import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DevTools from '../containers/DevTools';
import Homepage from '../containers/Homepage';
import dashboard from '../containers/dashboard';

const Root = () => {
  return (
    <>
      <Switch>
        <Route path="/loading/"></Route>
        <Route path="/dashboard/" component={dashboard} />
        <Route path="/" component={Homepage} />
      </Switch>
      <DevTools />
    </>
  );
};
export default Root;
