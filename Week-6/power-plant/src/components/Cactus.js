import React, { useState, useEffect } from 'react';
import { canGrow, canProduceFruits, canUsePowerup } from '../utils/composition';
import HealthBar from './HealthBar';
import WaterLevel from './WaterLevel';
import { createGameLoop } from '../utils/gameLogic';

const Cactus = () => {
  const plant = canUsePowerup(canProduceFruits(canGrow({})));
  const [health, setHealth] = useState(plant.getHealth());
  const [growthLevel, setGrowthLevel] = useState(plant.getGrowthLevel());
  const [fruitCount, setFruitCount] = useState(plant.getFruitCount());
  const [growthMultiplier, setGrowthMultiplier] = useState(plant.getGrowthMultiplier());

  const waterPlant = () => {
    plant.setHealth(plant.getHealth() + 10);
    setHealth(plant.getHealth());
    setGrowthLevel(plant.grow());
    setFruitCount(plant.produceFruit());
  };

  const usePowerup = () => {
    plant.usePowerup();
    setGrowthMultiplier(plant.getGrowthMultiplier());
  };

  useEffect(() => {
    const updateUI = () => {
      setHealth(plant.getHealth());
      setGrowthLevel(plant.getGrowthLevel());
      setFruitCount(plant.getFruitCount());
    };

    const gameInterval = createGameLoop(plant, updateUI);

    return () => clearInterval(gameInterval);
  }, [plant]);

  return (
    <div>
      <h2>Cactus</h2>
      <HealthBar health={health} />
      <WaterLevel waterLevel={health} />
      <p>Growth Level: {growthLevel}</p>
      <p>Fruit Count: {fruitCount}</p>
      <p>Growth Multiplier: {growthMultiplier}x</p>
      <button onClick={waterPlant}>Water Plant</button>
      <button onClick={usePowerup}>Use Powerup</button>
    </div>
  );
};

export default Cactus;
