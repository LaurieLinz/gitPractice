const {sum, sumThree, subtract} = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 + to equal 4', () => {
  expect(sumThree(1, 2, 1)).toBe(4);
  });

  test('it works with a negative result', () => {
      expect(subtract(5,6)).toBe(-1);
    })

