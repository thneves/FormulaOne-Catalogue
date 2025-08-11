import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCircuits } from '../redux/thunk';
import '../styles/containers/CircuitsList.scss';
import Loader from '../components/Loader';
import CircuitCard from '../components/CircuitCard';

const CircuitsList = () => {
  const circuitsState = useSelector(state => state.circuits.circuits);
  const currentSeason = useSelector(state => state.currentSeason);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use a default season (2023) if currentSeason is not set
    const season = currentSeason || 2023;
    dispatch(fetchCircuits(season));
    setLoading(false);
  }, [currentSeason, dispatch]);

  const printCircuits = circuitsState.map(circuit => (
    <CircuitCard key={circuit.id} circuit={circuit} />
  ));

  if (loading) {
    return <Loader />;
  }

  // Use the same season value for display
  const displaySeason = currentSeason || 2023;
  
  return (
    <div className="circuits-list">
      <h2 className="circuits-title">F1 Circuits - {displaySeason}</h2>
      <div className="circuits-container">
        {printCircuits.length > 0 ? printCircuits : <p>No circuits found for this season.</p>}
      </div>
    </div>
  );
};

export default CircuitsList;
