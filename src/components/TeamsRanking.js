import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
// import ../styles/components/TeamsRanking.scss;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import defaultJohn from '../assets/images/defaultjohn.png';
import { fetchTeam } from '../redux/thunk';
import TeamDetails from './TeamDetails';

const TeamsRanking = ({
    teamId,
    team,
		position,
    points,
    teamLogo,
}) => {
	const [showModal, setShowModal] = useState(false);
	const [renderTeam, setRenderTeam] = useState(false);

	const openModal = () => {
			setShowModal(!showModal)
	}

	const closeModal = () => {
			setShowModal(!showModal);
			setRenderTeam(!renderTeam);
	}

	const openTeamDetails = e => {
		openModal();
		const id = Number(e.currentTarget.value);
		fetchTeam(id);
		setRenderTeam(!renderTeam);
	}

	openModal.setAppElement('body');

	if (showModal) {
		return (
			<Modal isOpen={showModal} onRequestClose={openModal}>

			<div className="modal">
				<h1>Team Info</h1>
				<button onClick={closeModal} className="close-btn" type="button"><FontAwesomeIcon icon={faTimesCircle}>Close Window</FontAwesomeIcon></button>
			</div>
				<TeamDetails renderTeam={renderTeam} />
			</Modal>
		)
	}

	return (
	<>
		<div className='team-card'>
			<span className='team-position'>
					{ position }
			</span>
			<button className="team-btn" value={teamId} type="button" onClick={openTeamDetails}>
				<img className="team-image" onError={e => { e.target.src = defaultJohn; }} src={teamLogo} alt="team details" />
			</button>
			<div className="team-info">
				<span className="team-name">
					{team}
				</span>
				<span className="points-wins">
					Points&nbsp;&nbsp;
					<strong>{ points }</strong>
				</span>
			</div>
		</div>
	</>
	)
};

TeamsRanking.defaultProps = {
	points: 0
}

TeamsRanking.Prototype = {
	teamId: PropTypes.number.isRequired,
	team: PropTypes.string.isRequired,
	position: PropTypes.number.isRequired,
	points: PropTypes.number.isRequired,
	teamLogo: PropTypes.string.isRequired,
}


export default TeamsRanking;