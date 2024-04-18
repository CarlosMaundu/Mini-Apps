const triangleType = require('../src/triangleType');

describe('Triangle Type', () => {
  test('should correctly determine whether three lengths can make a triangle', () => {
    expect(triangleType(3,4,5)).toBe('Scalene');
    expect(triangleType(3,3,3)).toBe('Equilateral');
    expect(triangleType(2,2,8)).toBe('Not a triangle');
  });
});
