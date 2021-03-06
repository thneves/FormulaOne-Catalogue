import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faTimesCircle, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter, removeFilter, resetFilter } from '../redux/actions';
import FilterOptions from '../components/FilterOptions';
import '../styles/containers/FilterModal.scss';

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
        <div className="modal">
          <button className="reset-btn" onClick={resetFiltersHandler} type="button"><FontAwesomeIcon icon={faUndoAlt}>Filter</FontAwesomeIcon></button>
          <h1>Filter by years</h1>
          <button className="close-btn" onClick={toggleModal} type="button"><FontAwesomeIcon icon={faTimesCircle}>Close Window</FontAwesomeIcon></button>
        </div>
        <FilterOptions handleChange={handleChange} isChecked={isChecked} />
      </Modal>
    </div>
  );
};

export default FilterModal;
