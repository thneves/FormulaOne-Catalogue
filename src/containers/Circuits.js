import { useEffect, useState } from 'react';

import Loader from '../components/Loader';

const Circuits = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <button type="button">Click Me</button>
    </div>
  );
};

export default Circuits;
