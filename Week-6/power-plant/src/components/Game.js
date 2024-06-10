import React, { useState, useEffect } from 'react';
import Sunflower from './Sunflower';
import Cactus from './Cactus';

const Game = () => {
  const [selectedPlant, setSelectedPlant] = useState('Sunflower');
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    if (selectedPlant === 'Sunflower') {
      setPlant(<Sunflower />);
    } else if (selectedPlant === 'Cactus') {
      setPlant(<Cactus />);
    }
  }, [selectedPlant]);

  return (
    <div>
      <h1>Power Plant Game</h1>
      <select onChange={(e) => setSelectedPlant(e.target.value)}>
        <option value="Sunflower">Sunflower</option>
        <option value="Cactus">Cactus</option>
      </select>
      <div>{plant}</div>
    </div>
  );
};

export default Game;
