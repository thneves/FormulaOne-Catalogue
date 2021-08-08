import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Circuits from '../containers/Circuits';
import RankingsList from '../containers/RankingsList';
import SeasonsList from '../containers/SeasonsList';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/circuits" component={Circuits} />
      <Route path="/seasons" component={SeasonsList} />
      <Route path="/rankings" component={RankingsList} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
