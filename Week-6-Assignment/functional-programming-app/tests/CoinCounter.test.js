import { test, expect } from '@jest/globals';
import { countCoinsRecursive, coinCounterClosure } from '../src/CoinCounter';

//countCoinsRecursive works correctly
test('countCoinsRecursive works correctly', () => {
  expect(countCoinsRecursive(4.99)).toEqual({ 25: 19, 10: 2, 5: 0, 1: 4 });
});
//coinCounterClosure works correctly
test('coinCounterClosure works correctly', () => {
    expect(coinCounterClosure(4.99)).toEqual({ 25: 19, 10: 2, 5: 0, 1: 4, remainder: 0 });
  });
//intToRoman works correctly
test('countCoinsRecursive returns an empty object when the amount is zero', () => {
expect(countCoinsRecursive(0)).toEqual({});
});
//Check if countCoinsRecursive handles negative amounts correctly
test('countCoinsRecursive handles negative amounts correctly', () => {
    expect(() => countCoinsRecursive(-5.99)).toThrow('Amount must be a positive number');
});
//Verify countCoinsRecursive returns an empty object when the amount is zero
test('coinCounterClosure returns an empty object when the amount is zero', () => {
    expect(coinCounterClosure(0)).toEqual({ 25: 0, 10: 0, 5: 0, 1: 0, remainder: 0 });
});
  test('coinCounterClosure handles negative amounts correctly', () => {
    expect(() => coinCounterClosure(-5.99)).toThrow('Amount must be a positive number');
  });

// tests/RomanNumerals.test.js
import { intToRoman } from '../src/RomanNumerals';

test('intToRoman works correctly', () => {
  expect(intToRoman(3999)).toBe('MMMCMXCIX');
  expect(intToRoman(58)).toBe('LVIII');
});
