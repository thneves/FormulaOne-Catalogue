import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/DriversRanking.scss';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import defaultJohn from '../assets/images/defaultjohn.png';
import { fetchTeam, fetchOneDriver } from '../redux/thunk';
import TeamDetails from './TeamDetails';
import DriverDetails from './DriverDetails';

const DriversRanking = ({
  driver,
  driverImg,
  position,
  points,
  wins,
  teamLogo,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [renderTeam, setRenderTeam] = useState(false);
  const [renderDriver, setRenderDriver] = useState(false);

  console.log(renderTeam);

  const openModal = () => {
    setShowModal(!showModal);
    console.log(renderTeam);
  };

  const closeModal = () => {
    setShowModal(!showModal);
    if (!renderTeam) {
      setRenderDriver(!renderDriver);
    } else if (!renderDriver) {
      setRenderTeam(!renderTeam);
    }
  };

  const openTeamDetails = () => {
    openModal();
    fetchTeam(1);
    setRenderTeam(!renderTeam);
    console.log(renderTeam);
  };

  const openDriverDetails = () => {
    openModal();
    fetchOneDriver(20);
    setRenderDriver(!renderDriver);
  };

  Modal.setAppElement('body');

  if (showModal) {
    console.log('why');
    return (
      <Modal
        isOpen={showModal}
        onRequestClose={openModal}
      >
        <div className="modal">
          <h1>Team Info </h1>
          <button onClick={closeModal} className="close-btn" type="button"><FontAwesomeIcon icon={faTimesCircle}>Close Window</FontAwesomeIcon></button>
        </div>
        <TeamDetails renderTeam={renderTeam} />
        <DriverDetails renderDriver={renderDriver} />
      </Modal>
    );
  }

  return (
    <>
      <div className="driver-card">
        <span className="driver-position">
          { position }
        </span>
        <button className="driver-btn" type="button" onClick={openDriverDetails}><img className="driver-image" onError={e => { e.target.src = defaultJohn; }} src={driverImg} alt="driver profile" /></button>
        <div className="driver-info">
          <span className="driver-name">
            {driver}
          </span>
          <span className="points-wins">
            Points&nbsp;&nbsp;
            <strong>{ points }</strong>
          </span>
          <span className="points-wins">
            Wins&nbsp;&nbsp;&nbsp;&nbsp;
            <strong>{ wins }</strong>
          </span>
        </div>
        <button className="team-btn" type="button" onClick={openTeamDetails}><img src={teamLogo} className="team-logo" alt="team logo" /></button>
      </div>
    </>
  );
};

DriversRanking.defaultProps = {
  points: 0,
  wins: 0,
};

DriversRanking.propTypes = {
  driver: PropTypes.string.isRequired,
  driverImg: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  points: PropTypes.number,
  teamLogo: PropTypes.string.isRequired,
  wins: PropTypes.number,
};

export default DriversRanking;
