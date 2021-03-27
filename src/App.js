import React, { Suspense } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import './App.css';
import NominationSubmit from './containers/NominationSubmit/NominationSubmit';
import Nominations from './containers/Nominations/Nominations'

function App() {
  const routes = (
    <Switch>
      <Route path="/" exact component={Nominations} />
      <Route path="/nominations" exact component={Nominations} />
      <Route path="/nominate" exact component={NominationSubmit} />
      <Redirect to="/"/>
    </Switch>
  );

  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        {routes}
      </Suspense> 
    </div>
  );
}

export default withRouter(App);
