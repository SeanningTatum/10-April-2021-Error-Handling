import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Layout from '~/components/Layout';

function App(): JSX.Element {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
