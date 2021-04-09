import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './Home';

function App(): JSX.Element {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
