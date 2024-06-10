export const createPlant = () => {
    let waterLevel = 0;
    
    return {
      water: () => {
        waterLevel += 1;
        return waterLevel;
      },
      getWaterLevel: () => waterLevel,
    };
  };
  