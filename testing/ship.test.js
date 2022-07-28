import Ship from '../src/ship';

test('Ship: easy path', () => {
  expect(Ship({ length: 5, coordinates: ['a1'] })).toEqual();
});
