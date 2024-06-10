import React, { useState, useEffect } from 'react';
import { canGrow, photosynthesis } from '../utils/composition';
import HealthBar from './HealthBar';
import { createGameLoop } from '../utils/gameLogic';

const Sunflower = () => {
  const plant = photosynthesis(canGrow({}));
  const [health, setHealth] = useState(plant.getHealth());
  const [growthLevel, setGrowthLevel] = useState(plant.getGrowthLevel());

  useEffect(() => {
    const updateUI = () => {
      setHealth(plant.getHealth());
      setGrowthLevel(plant.getGrowthLevel());
    };

    const gameInterval = createGameLoop(plant, updateUI);

    return () => clearInterval(gameInterval);
  }, [plant]);

  return (
    <div>
      <h2>Sunflower</h2>
      <HealthBar health={health} />
      <p>Growth Level: {growthLevel}</p>
    </div>
  );
};

export default Sunflower;
