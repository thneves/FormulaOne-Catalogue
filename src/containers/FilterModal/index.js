import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter, removeFilter, resetFilter } from '../../redux/actions';
import FilterOptions from '../../components/FilterOptions';
import './styles.scss';

const FilterModal = () => {
  const [showModal, setShowModal] = useState(false);
  const filterState = useSelector(state => state.filterSeasons);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = e => {
    const { id, checked } = e.target;
    return checked ? dispatch(addFilter(id)) : dispatch(removeFilter(id));
  };

  const isChecked = id => filterState.includes(id);

  const resetFiltersHandler = () => {
    dispatch(resetFilter(filterState));
    toggleModal();
  };

  Modal.setAppElement('body');

  return (
    <div className="modal-div">
      <button className="filter-btn" type="button" onClick={toggleModal}><FontAwesomeIcon icon={faFilter}>Filter</FontAwesomeIcon></button>
      <Modal isOpen={showModal} onRequestClose={toggleModal}>
        <div>
          <button type="button" onClick={toggleModal}>Close</button>

          <div>
            <h1>Filters</h1>
            <button type="button" onClick={resetFiltersHandler}>Reset</button>
          </div>
        </div>
        <FilterOptions handleChange={handleChange} isChecked={isChecked} />
      </Modal>
    </div>
  );
};

// FilterModal.propTypes = {
//   filters: PropTypes.instanceOf(Array).isRequired,
//   addFilters: PropTypes.func.isRequired,
//   removeFilters: PropTypes.func.isRequired,
//   resetFilters: PropTypes.func.isRequired,
// };

export default FilterModal;
