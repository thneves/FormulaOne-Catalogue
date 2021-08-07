import { PropTypes } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/components/TeamDetails.scss';

const TeamDetails = ({ renderTeam }) => {
  const teamInfo = useSelector(state => state.showTeam.team[0]);
  if (renderTeam && teamInfo !== undefined) {
    return (
      <div className="info-team-box">
        <div className="info-team-div">
          <img className="big-logo" src={teamInfo.logo} alt="logo team big size" />
          <span>
            Team -&nbsp;
            <strong>{teamInfo.name}</strong>
          </span>
          <span>
            Engine -&nbsp;
            <strong>{teamInfo.engine}</strong>
          </span>
          <span>
            Tyres -&nbsp;
            <strong>{teamInfo.tyres}</strong>
          </span>
          <span>
            President -&nbsp;
            <strong>{teamInfo.president}</strong>
          </span>
          <span>
            Director -&nbsp;
            <strong>{teamInfo.director}</strong>
          </span>
          <span>
            Technical Managaer -&nbsp;
            <strong>{teamInfo.technical_manager}</strong>
          </span>
        </div>
      </div>
    );
  }
  return <div>Cannot get team info.</div>;
};

export default TeamDetails;

TeamDetails.propTypes = {
  renderTeam: PropTypes.bool.isRequired,
};
