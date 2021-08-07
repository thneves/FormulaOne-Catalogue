import { PropTypes } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/components/TeamModal.scss';

const DriverDetails = ({ canRender }) => {
  const teamInfo = useSelector(state => state.showTeam.team[0]);
  if (canRender && teamInfo !== undefined) {
    return (
      <div className="info-driver-box">
        <div className="info-driver-div">
          <img className="driver-big-picture" src={teamInfo.logo} alt="driver big size" />
          <span>
            Name -&nbsp;
            <strong>{teamInfo.name}</strong>
          </span>
          <span>
            Nationality -&nbsp;
            <strong>{teamInfo.engine}</strong>
          </span>
          <span>
            Age -&nbsp;
            <strong>{teamInfo.tyres}</strong>
          </span>
        </div>
      </div>
    );
  }
  return <div>Cannot get team info.</div>;
};

export default DriverDetails;

TeamDetails.propTypes = {
  canRender: PropTypes.bool.isRequired,
};
