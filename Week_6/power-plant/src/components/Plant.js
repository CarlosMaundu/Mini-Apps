import React, { useState } from 'react';
import { createPlant } from '../utils/stateManagement';
import { canGrow, canProduceFruits, canUsePowerup } from '../utils/composition';

const Plant = () => {
  const plant = canUsePowerup(canProduceFruits(canGrow(createPlant())));
  const [waterLevel, setWaterLevel] = useState(plant.getWaterLevel());
  const [growthLevel, setGrowthLevel] = useState(plant.getGrowthLevel());
  const [fruitCount, setFruitCount] = useState(plant.getFruitCount());
  const [growthMultiplier, setGrowthMultiplier] = useState(plant.getGrowthMultiplier());

  const waterPlant = () => {
    setWaterLevel(plant.water());
    setGrowthLevel(plant.grow());
    setFruitCount(plant.produceFruit());
  };

  const usePowerup = () => {
    plant.usePowerup();
    setGrowthMultiplier(plant.getGrowthMultiplier());
  };

  return (
    <div>
      <p>Water Level: {waterLevel}</p>
      <p>Growth Level: {growthLevel}</p>
      <p>Fruit Count: {fruitCount}</p>
      <p>Growth Multiplier: {growthMultiplier}x</p>
      <button onClick={waterPlant}>Water Plant</button>
      <button onClick={usePowerup}>Use Powerup</button>
    </div>
  );
};

export default Plant;
