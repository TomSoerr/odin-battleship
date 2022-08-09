/* eslint-disable no-undef */
import Player from '../src/player';
import Gameboard from '../src/gameboard';

test('Player: test random attack 1', () => {
  const player = Player();
  const gameboard = Gameboard();

  Object.entries(gameboard.board).forEach(([key, value]) => {
    if (key !== 'j10') {
      gameboard.board[key] = 'hit';
    }
  });
  expect(player.attack({ gameboard })).toBe('miss');
  expect(gameboard.board.j10).toBe('miss');
});

test('Player: test random attack 1', () => {
  const player = Player();
  const gameboard = Gameboard();

  Object.entries(gameboard.board).forEach(([key, value]) => {
    if (key !== 'j10') {
      gameboard.board[key] = 'miss';
    }
  });
  expect(gameboard.place({ start: 'j10', direction: 'horizontal', length: 1 }));
  expect(player.attack({ gameboard })).toBe('allSunk');
  expect(gameboard.board.j10).toBe('hit');
});

test('Player: test attack', () => {
  const gameboard = Gameboard();
  const player = Player();

  player.attack({ gameboard, coordinates: 'a1' });
  expect(gameboard.board.a1).toBe('miss');
});

test('Player: place all ships', () => {
  const player = Player();
  const generateShips = player.placeShips();
  let value;
  value = generateShips.next().value;
  expect(value[0]).toBe('Carrier');
  expect(value[1]).toBe(5);
  expect(typeof value[2]).toBe('function');

  value = generateShips.next().value;
  expect(value[0]).toBe('Battleship');
  expect(value[1]).toBe(4);
  expect(typeof value[2]).toBe('function');

  value = generateShips.next().value;
  expect(value[0]).toBe('Cruiser');
  expect(value[1]).toBe(3);
  expect(typeof value[2]).toBe('function');

  value = generateShips.next().value;
  expect(value[0]).toBe('Destroyer');
  expect(value[1]).toBe(2);
  expect(typeof value[2]).toBe('function');

  value = generateShips.next().value;
  expect(value[0]).toBe('Destroyer');
  expect(value[1]).toBe(2);
  expect(typeof value[2]).toBe('function');

  value = generateShips.next().value;
  expect(value[0]).toBe('Submarine');
  expect(value[1]).toBe(1);
  expect(typeof value[2]).toBe('function');

  value = generateShips.next().value;
  expect(value[0]).toBe('Submarine');
  expect(value[1]).toBe(1);
  expect(typeof value[2]).toBe('function');

  expect(generateShips.next().done).toBe(true);
});

test('Player: placeRandomShips', () => {
  const player = Player();
  expect(player.placeRandomShips()).toBe(true);

  expect(
    Object.values(player.board).reduce((prev, curr) => {
      if (typeof curr === 'function') {
        prev += 1;
      }
      return prev;
    }, 0)
  ).toBe(18);
});
