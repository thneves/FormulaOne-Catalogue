import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { fetchDrivers, fetchTeams } from '../redux/thunk';
import { displaySeason } from '../redux/actions';
import DriversRanking from '../components/DriversRanking';
import TeamsRanking from '../components/TeamsRanking';
import Loader from '../components/Loader';
import '../styles/containers/RankingsList.scss';

const RankingsList = () => {
  const { season } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentSeason = useSelector(state => state.currentSeason);
  const rankingState = useSelector(state => state.drivers.drivers);
  const teamsRankingState = useSelector(state => state.teams.teams);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If we have a season from URL, use it
    if (season) {
      dispatch(displaySeason(season));
      fetchDrivers(season);
      fetchTeams(season);
    } 
    // If no season in URL but we have one in Redux, redirect to proper URL
    else if (currentSeason && currentSeason !== 0) {
      navigate(`/rankings/${currentSeason}`, { replace: true });
      return;
    }
    // If no season anywhere, redirect to home
    else {
      navigate('/', { replace: true });
      return;
    }
    
    setLoading(false);
  }, [season, currentSeason, dispatch, navigate]);

  // Show loader while determining what to do
  if (loading || (!season && !currentSeason)) {
    return <Loader />;
  }

  const displayedSeason = season || currentSeason;

  const printDriversRanking = rankingState.map(driver => (
    <DriversRanking
      key={driver.position}
      driver={driver.driver.name}
      driverImg={driver.driver.image}
      position={driver.position}
      points={driver.points}
      team={driver.team.name}
      teamLogo={driver.team.logo}
      wins={driver.wins}
      driverId={driver.driver.id}
      teamId={driver.team.id}
    />
  ));

  const printTeamsRanking = teamsRankingState.map(team => {
    <TeamsRanking
      key={team.position}
      team={team.team}
      points={team.points}
      teamLogo={team.teamLogo}
    />
  });

  return (
    <>
      <div className="ranking">
        <div className="ranking-head">
          <Link to="/" className="back-icon"><FontAwesomeIcon icon={faArrowCircleLeft}>Back</FontAwesomeIcon></Link>
          <h3 className="ranking-text">
            Season Ranking
            {' '}
            { displayedSeason }
          </h3>
        </div>
        <div className="ranking-list">
          { printDriversRanking }
        </div>
        <div class="ranking-list">
          { printTeamsRanking }
        </div>
      </div>
    </>
  );
};

export default RankingsList;
