import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/CircuitCard.scss';

const CircuitCard = ({ circuit }) => (
  <>
    <div role="presentation" className="circuit-card">
      <p className="circuit-name">{ circuit }</p>
    </div>
  </>
);

CircuitCard.propTypes = {
  circuit: PropTypes.string.isRequired,
};

export default CircuitCard;
