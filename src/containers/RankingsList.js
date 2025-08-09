import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { fetchDrivers } from '../redux/thunk';
import { displaySeason } from '../redux/actions';
import DriversRanking from '../components/DriversRanking';
import Loader from '../components/Loader';
import '../styles/containers/RankingsList.scss';

const RankingsList = () => {
  const { season } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentSeason = useSelector(state => state.currentSeason);
  const rankingState = useSelector(state => state.drivers.drivers);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If we have a season from URL, use it
    if (season) {
      dispatch(displaySeason(season));
      fetchDrivers(season);
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

  const printRanking = rankingState.map(driver => (
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
          { printRanking }
        </div>
      </div>
    </>
  );
};

export default RankingsList;
