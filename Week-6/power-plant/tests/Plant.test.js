import { render, fireEvent } from '@testing-library/react';
import Plant from '../src/components/Plant';
import React from 'react';
import '@testing-library/jest-dom'; // Import this line at the top of your test file


test('Plant water, grow, produce fruit, and use powerup', () => {
  // Render the Plant component
  const { getByText } = render(<Plant />);

  // Get the water and powerup buttons
  const waterButton = getByText(/Water Plant/i);
  const powerupButton = getByText(/Use Powerup/i);

  // Click the water button
  fireEvent.click(waterButton);

  // Verify the expected results after watering
  expect(getByText(/Water Level: 1/i)).toBeInTheDocument();
  expect(getByText(/Growth Level: 1 2x/i)).toBeInTheDocument();
  expect(getByText(/Fruit Count: 1/i)).toBeInTheDocument();

  // Click the powerup button to use powerup
  fireEvent.click(powerupButton);

  // Verify the expected results after using powerup
  expect(getByText(/Growth Multiplier: 2x/i)).toBeInTheDocument();

  // Click the water button again
  fireEvent.click(waterButton);

  // Verify the expected results after watering with powerup
  expect(getByText(/Growth Level: 3/i)).toBeInTheDocument(); // Growth Level 1 + 2 (due to powerup)
});

