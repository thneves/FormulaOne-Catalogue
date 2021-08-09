import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/CircuitCard.scss';
import Modal from 'react-modal';
import defaultImg from '../assets/images/defaultNotFound.png';

const CircuitCard = ({
  circuit, image, competition, country, city, length, capacity, owner,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div role="presentation" onClick={toggleModal} className="circuit-card">
        <p className="circuit-name">{ circuit }</p>
      </div>
      <Modal isOpen={showModal}>
        <div className="modal">
          <h1>{ circuit }</h1>
          <button onClick={toggleModal} className="close-btn" type="button"><FontAwesomeIcon icon={faTimesCircle}>Close Window</FontAwesomeIcon></button>
        </div>
        <div className="circuit-modal-div">
          <img className="circuit-image" src={image} onError={e => { e.target.src = defaultImg; }} alt="circuit map" />
          <div className="circuit-details">
            <span>
              Competition -&nbsp;
              <strong>{competition}</strong>
            </span>
            <span>
              Country -&nbsp;
              <strong>{country}</strong>
            </span>
            <span>
              City -&nbsp;
              <strong>{city}</strong>
            </span>
            <span>
              Length -&nbsp;
              <strong>{length}</strong>
            </span>
            <span>
              Capacity -&nbsp;
              <strong>{capacity}</strong>
            </span>
            <span>
              Owner -&nbsp;
              <strong>{owner}</strong>
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
};

CircuitCard.propTypes = {
  circuit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  competition: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default CircuitCard;
