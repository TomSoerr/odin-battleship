/* eslint-disable no-undef */
import Ship from '../src/ship';

test('Ship: shot a ship', () => {
  const destroyer = Ship({ length: 2 });
  destroyer.hit({ relativeCoordinates: 0 });
  expect(destroyer.isSunk()).toBe(false);
});

test('Ship: no hit obj 1', () => {
  const cruiser = Ship({ length: 3 });
  expect(() => cruiser.hit()).toThrow("No 'relativeCoordinates'");
});

test('Ship: no hit obj 1', () => {
  const cruiser = Ship({ length: 3 });
  expect(() => cruiser.hit(3)).toThrow("No 'relativeCoordinates'");
});

test('Ship: wrong hit args', () => {
  const submarine = Ship({ length: 3 });
  expect(() => submarine.hit({ relativeCoordinates: 3 })).toThrow(
    "Wrong 'relativeCoordinates'"
  );
  expect(() => submarine.hit({ relativeCoordinates: -1 })).toThrow(
    "Wrong 'relativeCoordinates'"
  );
});

test('Ship: sink a ship', () => {
  const submarine = Ship({ length: 3 });
  submarine.hit({ relativeCoordinates: 0 });
  submarine.hit({ relativeCoordinates: 1 });
  submarine.hit({ relativeCoordinates: 2 });
  expect(submarine.isSunk()).toBe(true);
});
