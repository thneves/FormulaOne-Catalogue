import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';

const FilterOptions = ({ handleChange, isChecked }) => (

  <>
    <form>
      <fieldset>
        <Checkbox handleChange={handleChange} checked={isChecked} />
      </fieldset>
    </form>
  </>
);

FilterOptions.propTypes = {
  handleChange: PropTypes.func.isRequired,
  isChecked: PropTypes.func.isRequired,
};

export default FilterOptions;
