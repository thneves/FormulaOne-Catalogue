import { PropTypes } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/components/DriverDetails.scss';

const DriverDetails = ({ canRender }) => {
  const driverInfo = useSelector(state => state.showDriver.driver[0]);
  if (canRender && driverInfo !== undefined) {
    return (
      <div className="info-driver-box">
        <div className="info-driver-div">
          <img className="driver-big-picture" src={driverInfo.image} alt="driver big size" />
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
              <strong>{driverInfo.birthdate}</strong>
            </span>
          </div>
        </div>
      </div>
    );
  }
  return <div>Cannot get team info.</div>;
};

export default DriverDetails;

DriverDetails.propTypes = {
  canRender: PropTypes.bool.isRequired,
};
