import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import './styles.scss';

const FilterModal = ({ years }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const modalForm = (
    <form>
      <fieldset>
        {years.map(year => (
          <label htmlFor="years-filter" key={year}>
            {year}
            <input type="checkbox" id="years-filter" />
          </label>
        ))}
      </fieldset>
    </form>
  );

  Modal.setAppElement('body');

  return (
    <div className="modal-div">
      <button type="button" onClick={toggleModal}>Open Modal</button>
      <Modal isOpen={showModal}>
        <button type="button" onClick={toggleModal}>Close</button>
        {modalForm}
      </Modal>
    </div>
  );
};

FilterModal.defaultProps = {
  years: [],
};

FilterModal.propTypes = {
  years: PropTypes.instanceOf(Array),
};

export default FilterModal;
