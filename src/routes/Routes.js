import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Header from '../components/Header';
import RankingsList from '../containers/RankingsList/RankingsList';
import SeasonsList from '../containers/SeasonsList/SeasonsList';

const Routes = () => {
  const location = window.location.pathname;

  return (
    <BrowserRouter>
      <Header bg={location} />
      <Switch>
        <Route path="/" component={SeasonsList} exact />
        <Route path="/rankings" component={RankingsList} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
