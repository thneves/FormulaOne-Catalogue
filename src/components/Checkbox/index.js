import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Checkbox = ({
  handleChange, checked,
}) => {
  const list = useSelector(state => state.seasons.seasons);
  return list.map(year => (
    <div key={year}>
      <label htmlFor={year}>
        {year}
        <input type="checkbox" value={year} id={year} onChange={handleChange} defaultChecked={checked(year)} />
      </label>
    </div>
  ));
};

Checkbox.propTypes = {
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.func.isRequired,
};

export default Checkbox;
