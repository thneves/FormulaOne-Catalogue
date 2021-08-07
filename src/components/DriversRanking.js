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

  const toggleModal = () => {
    setShowModal(!showModal);
    fetchTeam(1);
    fetchOneDriver(20);
  };

  Modal.setAppElement('body');

  if (showModal) {
    console.log('why');
    return (
      <Modal isOpen={showModal} onRequestClose={toggleModal}>
        <div className="modal">
          <h1>Team Info </h1>
          <button onClick={toggleModal} className="close-btn" type="button"><FontAwesomeIcon icon={faTimesCircle}>Close Window</FontAwesomeIcon></button>
        </div>
        <TeamDetails canRender={showModal} />
        <DriverDetails canRender={showModal} />
      </Modal>
    );
  }

  return (
    <>
      <div className="driver-card">
        <span className="driver-position">
          { position }
        </span>
        <button className="driver-btn" type="button" onClick={toggleModal}><img className="driver-image" onError={e => { e.target.src = defaultJohn; }} src={driverImg} alt="driver profile" /></button>
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
        <button className="team-btn" type="button" onClick={toggleModal}><img src={teamLogo} className="team-logo" alt="team logo" /></button>
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
