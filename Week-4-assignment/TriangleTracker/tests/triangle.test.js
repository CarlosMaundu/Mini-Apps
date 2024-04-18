const triangleType = require('../src/triangleType').default;

describe('Triangle Type', () => {
  test('should correctly determine whether three lengths can make a triangle', () => {
    expect(triangleType(3,4,5)).toBe('Scalene');
    expect(triangleType(3,3,3)).toBe('Equilateral');
    expect(triangleType(2,2,8)).toBe('Not a triangle');
  });

  test('should correctly determine whether three lengths can make an isosceles triangle', () => {
    expect(triangleType(5,5,3)).toBe('Isosceles');
    expect(triangleType(3,5,5)).toBe('Isosceles');
    expect(triangleType(5,3,5)).toBe('Isosceles');
  });

  test('should correctly determine whether three lengths can make a scalene triangle', () => {
    expect(triangleType(7,9,10)).toBe('Scalene');
    expect(triangleType(8,6,10)).toBe('Scalene');
    expect(triangleType(12,5,8)).toBe('Scalene');
  });

  test('should correctly determine whether three lengths can make a right triangle', () => {
    expect(triangleType(3,4,5)).toBe('Scalene');
    expect(triangleType(5,12,13)).toBe('Scalene');
    expect(triangleType(8,15,17)).toBe('Scalene');
  });

  test('should correctly determine whether three lengths can make a triangle when all parameters are zero', () => {
    expect(triangleType(0, 0, 0)).toBe('Not a triangle');
  });

  test('should correctly determine whether three lengths can make a triangle when one parameter is a decimal number', () => {
    expect(triangleType(3.5, 4, 5)).toBe('Scalene');
    expect(triangleType(5.5, 5.5, 3)).toBe('Isosceles');
    expect(triangleType(2.5, 2.5, 2.5)).toBe('Equilateral');
  });

  test('should correctly determine whether three lengths can make a triangle when two parameters are negative and one is positive', () => {
    expect(triangleType(-3, -4, 5)).toBe('Not a triangle');
    expect(triangleType(-5, 3, -5)).toBe('Not a triangle');
    expect(triangleType(4, -5, -6)).toBe('Not a triangle');
  });

  test('should correctly determine whether three lengths can make a triangle when one side is much larger than the other two sides', () => {
    expect(triangleType(1, 2, 100)).toBe('Not a triangle');
    expect(triangleType(1000, 2000, 1)).toBe('Not a triangle');
    expect(triangleType(10000, 20000, 1)).toBe('Not a triangle');
  });

  test('should correctly determine whether three lengths can make a triangle with equal decimal sides', () => {
    expect(triangleType(1.5, 1.5, 1.5)).toBe('Equilateral');
    expect(triangleType(2.2, 2.2, 2.2)).toBe('Equilateral');
    expect(triangleType(3.7, 3.7, 3.7)).toBe('Equilateral');
  });
});
