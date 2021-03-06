import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Header from '../components/Header';
import RankingsList from '../containers/RankingsList';
import SeasonsList from '../containers/SeasonsList';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={SeasonsList} exact />
      <Route path="/rankings" component={RankingsList} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
