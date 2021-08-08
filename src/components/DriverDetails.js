import { PropTypes } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/components/DriverDetails.scss';
import GetAge from '../helpers/GetAge';
import defaultJohn from '../assets/images/defaultjohn.png';

const DriverDetails = ({ renderDriver }) => {
  const driverInfo = useSelector(state => state.showDriver.driver[0]);
  if (renderDriver && driverInfo !== undefined) {
    const age = GetAge(driverInfo.birthdate);
    return (
      <div className="info-driver-box">
        <div className="info-driver-div">
          <img className="driver-big-picture" src={driverInfo.image} onError={e => { e.target.src = defaultJohn; }} alt="driver big size" />
          <div className="driver-info-details">
            <span>
              Name -&nbsp;
              <strong>{driverInfo.name}</strong>
            </span>
            <span>
              Nationality -&nbsp;
              <strong>{driverInfo.nationality}</strong>
            </span>
            <span>
              Age -&nbsp;
              <strong>{age}</strong>
            </span>
          </div>
        </div>
      </div>
    );
  }
  return <div />;
};

export default DriverDetails;

DriverDetails.propTypes = {
  renderDriver: PropTypes.bool.isRequired,
};
