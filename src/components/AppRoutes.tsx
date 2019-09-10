import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { LoginContainer } from '../components/login';
import { HomeContainer } from '../components/home';
import { NotFound } from '../components/generic';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/not-found' component={NotFound} />

        {/* Otherwise for react-router-dom 4+ */}
        <Redirect to='/not-found' />
      </Switch>
    </Router>
  );
}

export default AppRoutes;