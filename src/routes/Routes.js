import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Header from '../components/Header';
import RankingsList from '../containers/RankingsList';
import SeasonsList from '../containers/SeasonsList';

const AppRoutes = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<SeasonsList />} />
      <Route path="/rankings/:season" element={<RankingsList />} />
      <Route path="/rankings" element={<RankingsList />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
