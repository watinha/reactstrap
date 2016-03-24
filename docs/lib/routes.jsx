import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Home from './Home';
import ButtonsPage from './Components/ButtonsPage';
import PopoversPage from './Components/PopoversPage';
import NotFound from './NotFound';
import Components from './Components';

const routes = (
  <Route path="/">
    <IndexRoute component={ Home } />
    <Route path="/components" component={Components}>
      <IndexRedirect to="buttons" />
      <Route path="buttons" component={ ButtonsPage } />
      <Route path="popovers" component={ PopoversPage } />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;