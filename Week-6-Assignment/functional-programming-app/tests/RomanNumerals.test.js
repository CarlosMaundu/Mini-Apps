import { test, expect } from '@jest/globals';
import { intToRoman } from '../src/RomanNumerals';

test('intToRoman works correctly', () => {
    expect(intToRoman(3999)).toBe('MMMCMXCIX');
    expect(intToRoman(58)).toBe('LVIII');
});

// tests/RomanNumerals.test.js

// Add the following test case to the existing test suite
test('intToRoman throws an error for negative numbers', () => {
    expect(() => intToRoman(-5)).toThrow('Input must be a positive integer');
});

// tests/RomanNumerals.test.js

// Add the following test case to the existing test suite
test('intToRoman returns correct Roman numerals for numbers between 1 and 10', () => {
  expect(intToRoman(1)).toBe('I');
  expect(intToRoman(2)).toBe('II');
  expect(intToRoman(3)).toBe('III');
  expect(intToRoman(4)).toBe('IV');
  expect(intToRoman(5)).toBe('V');
  expect(intToRoman(6)).toBe('VI');
  expect(intToRoman(7)).toBe('VII');
  expect(intToRoman(8)).toBe('VIII');
  expect(intToRoman(9)).toBe('IX');
  expect(intToRoman(10)).toBe('X');
});

// tests/RomanNumerals.test.js

// Add the following test case to the existing test suite
test('intToRoman throws an error for non-integer inputs', () => {
    expect(() => intToRoman(3.14)).toThrow('Input must be a positive integer');
    expect(() => intToRoman('abc')).toThrow('Input must be a positive integer');
});

// tests/RomanNumerals.test.js

// Add the following test case to the existing test suite
test('intToRoman rounds floating-point numbers to the nearest integer', () => {
  expect(intToRoman(3.9)).toBe('IV');
  expect(intToRoman(4.5)).toBe('IV');
  expect(intToRoman(4.9)).toBe('V');
  expect(intToRoman(10.2)).toBe('X');
  expect(intToRoman(10.8)).toBe('X');
  expect(intToRoman(10.9)).toBe('XI');
  expect(intToRoman(49.9)).toBe('XL');
  expect(intToRoman(50.5)).toBe('L');
  expect(intToRoman(50.9)).toBe('LI');
  expect(intToRoman(99.9)).toBe('XC');
  expect(intToRoman(100.5)).toBe('C');
  expect(intToRoman(100.9)).toBe('CI');
  expect(intToRoman(399.9)).toBe('CCCXCIX');
  expect(intToRoman(400.5)).toBe('CD');
  expect(intToRoman(400.9)).toBe('CDI');
  expect(intToRoman(999.9)).toBe('CMXCIX');
  expect(intToRoman(1000.5)).toBe('M');
  expect(intToRoman(1000.9)).toBe('M');
  expect(intToRoman(3999.9)).toBe('MMMCMXCIX');
});