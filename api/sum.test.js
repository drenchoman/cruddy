import sum from './sum';

describe('when test pass', () => {
  test('should return an answer 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
