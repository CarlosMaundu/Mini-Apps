import React from 'react';

const WaterLevel = ({ waterLevel }) => (
  <div>
    <label>Water Level:</label>
    <progress value={waterLevel} max="100"></progress>
  </div>
);

export default WaterLevel;
