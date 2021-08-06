import Modal from 'react-modal';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import '../styles/components/TeamModal.scss';
import PropTypes from 'prop-types';
import { fetchTeam } from '../redux/thunk';

const TeamModal = ({ image }) => {
  const [showModal, setShowModal] = useState(false);
  const teamState = useSelector(state => state.showTeam.team[0]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleOpenModal = () => {
    console.log(teamState);
    fetchTeam('petron');
  };

  Modal.setAppElement('body');

  return (
    <>
      <button className="modal-btn-open" type="button" onClick={toggleModal}><img src={image} alt="team logo" className="team-logo" /></button>
      <Modal isOpen={showModal} onAfterOpen={handleOpenModal} onRequestClose={toggleModal}>
        <div className="modal">
          <h1>Team Info </h1>
          <h1>{teamState.name}</h1>
          <button onClick={toggleModal} className="close-btn" type="button"><FontAwesomeIcon icon={faTimesCircle}>Close Window</FontAwesomeIcon></button>
        </div>
        <div className="info-team-div">
          <img className="big-logo" src={teamState.logo} alt="logo team big size" />
          <span>
            Engine -
            {' '}
            <strong>{teamState.engine}</strong>
          </span>
          <span>
            Tyres -
            {' '}
            <strong>{teamState.tyres}</strong>
          </span>
          <span>
            President -
            {' '}
            <strong>{teamState.president}</strong>
          </span>
          <span>
            Director -
            {' '}
            <strong>{teamState.director}</strong>
          </span>
          <span>
            Technical Managaer -
            {' '}
            <strong>{teamState.technical_manager}</strong>
          </span>
        </div>
      </Modal>
    </>
  );
};

TeamModal.propTypes = {
  image: PropTypes.string.isRequired,
};

export default TeamModal;
