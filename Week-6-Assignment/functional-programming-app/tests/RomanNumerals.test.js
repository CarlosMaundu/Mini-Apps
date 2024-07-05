import { test, expect } from '@jest/globals';
import { intToRoman } from '../src/RomanNumerals';

test('intToRoman works correctly', () => {
    expect(intToRoman(3999)).toBe('MMMCMXCIX');
    expect(intToRoman(58)).toBe('LVIII');
});

test('intToRoman throws an error for negative numbers', () => {
    expect(() => intToRoman(-5)).toThrow('Input must be a positive integer');
});

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

test('intToRoman throws an error for non-integer inputs', () => {
    expect(() => intToRoman(3.14)).toThrow('Input must be a positive integer');
    expect(() => intToRoman('abc')).toThrow('Input must be a positive integer');
});
