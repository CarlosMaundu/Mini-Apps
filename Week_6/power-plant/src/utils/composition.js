export const canGrow = (plant) => {
    let growthLevel = 0;
    let health = 100;
  
    return {
      ...plant,
      grow: () => {
        growthLevel += 1;
        return growthLevel;
      },
      getGrowthLevel: () => growthLevel,
      setGrowthLevel: (level) => { growthLevel = level; },
      getHealth: () => health,
      setHealth: (newHealth) => { health = newHealth; },
    };
  };
  
  export const canProduceFruits = (plant) => {
    let fruitCount = 0;
  
    return {
      ...plant,
      produceFruit: () => {
        fruitCount += 1;
        return fruitCount;
      },
      getFruitCount: () => fruitCount,
    };
  };
  
  export const canUsePowerup = (plant) => {
    let growthMultiplier = 1;
  
    return {
      ...plant,
      usePowerup: () => {
        growthMultiplier = 2;
      },
      grow: () => {
        const growthLevel = plant.getGrowthLevel() + growthMultiplier;
        plant.setGrowthLevel(growthLevel);
        return growthLevel;
      },
      getGrowthMultiplier: () => growthMultiplier,
    };
  };
  
  export const photosynthesis = (plant) => {
    setInterval(() => {
      let newHealth = plant.getHealth() + 1;
      plant.setHealth(newHealth);
    }, 1000);
    return plant;
  };
  