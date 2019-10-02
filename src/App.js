import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./routes/HomePage'));
const IssueDetails = lazy(() => import('./routes/IssueDetails'));

const App = () => (
  <Router>
    <Suspense fallback={<div className="lds-roller"><div/></div>}>
      <Switch>
        <Route path="/issue-details" component={IssueDetails} />
        <Route exact path="/:page" component={HomePage} />
        <Redirect exact from='/'  to='/1' />
      </Switch>
    </Suspense>
  </Router>
);
export default App;
