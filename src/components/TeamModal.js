import Modal from 'react-modal';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import '../styles/components/TeamModal.scss';
import { fetchTeam } from '../redux/thunk';

const TeamModal = () => {
  const [showModal, setShowModal] = useState(false);
  const teamState = useSelector(state => state.showTeam);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleOpenModal = () => {
    console.log(teamState);
    fetchTeam('petron');
  };

  Modal.setAppElement('body');

  return (
    <div>
      <button type="button" onClick={toggleModal}>open modal </button>
      <Modal isOpen={showModal} onAfterOpen={handleOpenModal} onRequestClose={toggleModal}>
        <h1>Team Info </h1>
        <button onClick={toggleModal} type="button"><FontAwesomeIcon icon={faTimesCircle}>Close Window</FontAwesomeIcon></button>
      </Modal>
    </div>
  );
};

export default TeamModal;
