const triangleType = require('../src/triangleType');

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
});
