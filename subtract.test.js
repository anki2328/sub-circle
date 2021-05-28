const subtract = require('./subtract');

test('adds 5 - 2 to equal 3', () => {
  expect(subtract(5, 2)).toBe(3);
});