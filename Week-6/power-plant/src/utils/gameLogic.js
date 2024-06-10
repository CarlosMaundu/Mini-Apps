export const createGameLoop = (plant, updateUI) => {
    const gameInterval = setInterval(() => {
      // Decrease health over time
      let newHealth = plant.getHealth() - 1;
      plant.setHealth(newHealth);
      
      // Update the UI based on the new state
      updateUI();
  
      // Check for game over condition
      if (newHealth <= 0) {
        clearInterval(gameInterval);
        alert("Game Over! Your plant's health has reached zero.");
      }
    }, 1000); // Adjust the interval as needed
  
    return gameInterval;
  };
  