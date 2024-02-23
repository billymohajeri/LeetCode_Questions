// app.test.js
const containsDuplicate = require('./217-Contains-Duplicate'); // Adjust the path to where your function is exported

describe('containsDuplicate function', () => {
  test('returns true for array containing duplicates', () => {
    expect(containsDuplicate([1,2,3,1])).toBe(true);
  });

  test('returns false for array without duplicates', () => {
    expect(containsDuplicate([1,2,3,4])).toBe(false);
  });

  test('returns false for empty array', () => {
    expect(containsDuplicate([])).toBe(false);
  });
});
