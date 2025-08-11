import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/CircuitCard.scss';

const CircuitCard = ({ circuit }) => {
  return (
    <div className="circuit-card">
      <div className="circuit-image">
        {circuit.image ? (
          <img src={circuit.image} alt={circuit.name} />
        ) : (
          <div className="no-image">No Image Available</div>
        )}
      </div>
      <div className="circuit-info">
        <h3>{circuit.name}</h3>
        <p className="circuit-location">
          <span className="label">Location:</span> {circuit.competition.location.city}, {circuit.competition.location.country}
        </p>
        {circuit.length && (
          <p className="circuit-length">
            <span className="label">Length:</span> {circuit.length}m
          </p>
        )}
        {circuit.capacity && (
          <p className="circuit-capacity">
            <span className="label">Capacity:</span> {circuit.capacity}
          </p>
        )}
        {circuit.opened && (
          <p className="circuit-opened">
            <span className="label">Opened:</span> {circuit.opened}
          </p>
        )}
      </div>
    </div>
  );
};

CircuitCard.propTypes = {
  circuit: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    length: PropTypes.string,
    capacity: PropTypes.string,
    opened: PropTypes.number,
    competition: PropTypes.shape({
      location: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string
      })
    }).isRequired
  }).isRequired,
};

export default CircuitCard;
