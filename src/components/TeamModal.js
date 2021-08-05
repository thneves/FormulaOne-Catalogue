import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { getTeamInfo } from '../requests/api';
import '../styles/components/TeamModal.scss';

const TeamModal = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    const info = getTeamInfo('petron');
    console.log(info);
  };

  Modal.setAppElement('body');

  return (
    <div className="team-image-ranking">
      <button type="button" onClick={toggleModal}><img src={image} alt="team logo" /></button>
      <Modal isOpen={showModal} onRequestClose={toggleModal}>
        <div className="modal">
          <h1>Team Info </h1>
          <button className="close-btn" onClick={toggleModal} type="button"><FontAwesomeIcon icon={faTimesCircle}>Close Window</FontAwesomeIcon></button>
        </div>
      </Modal>
    </div>
  );
};

TeamModal.propTypes = {
  image: PropTypes.string.isRequired,
};

export default TeamModal;
