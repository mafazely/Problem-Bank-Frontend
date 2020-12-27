import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from '../containers/Homepage';
import dashboard from '../containers/dashboard';

const Root = () => {
  return (
    <>
      <Switch>
        <Route path="/loading/"></Route>
        <Route path="/" component={Homepage} />
      </Switch>
    </>
  );
};
export default Root;
