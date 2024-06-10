import React from 'react';

const HealthBar = ({ health }) => (
  <div>
    <label>Health:</label>
    <progress value={health} max="100"></progress>
  </div>
);

export default HealthBar;
