import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import Spinner from './components/Spinner';

const HomePage = lazy(() => import('./routes/HomePage'));
const IssueDetails = lazy(() => import('./routes/IssueDetails'));

const App = () => (
  <Router>
    <Suspense fallback={<Spinner/>}>
      <Switch>
        <Route path="/issue-details" component={IssueDetails} />
        <Route exact path="/:page" component={HomePage} />
        <Redirect exact from='/'  to='/1' />
      </Switch>
    </Suspense>
  </Router>
);
export default App;
