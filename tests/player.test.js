/* eslint-disable no-undef */
import Player from '../src/player';
import Gameboard from '../src/gameboard';

test('Player: test random attack', () => {
  const gameboard = Gameboard();
  const player = Player();

  expect(
    gameboard.place({ start: 'a1', direction: 'horizontal', length: 10 })
  ).toBe(true);
  expect(
    gameboard.place({ start: 'b1', direction: 'horizontal', length: 10 })
  ).toBe(true);
  expect(
    gameboard.place({ start: 'c1', direction: 'horizontal', length: 10 })
  ).toBe(true);
  expect(
    gameboard.place({ start: 'd1', direction: 'horizontal', length: 10 })
  ).toBe(true);
  expect(
    gameboard.place({ start: 'e1', direction: 'horizontal', length: 10 })
  ).toBe(true);
  expect(
    gameboard.place({ start: 'f1', direction: 'horizontal', length: 10 })
  ).toBe(true);
  expect(
    gameboard.place({ start: 'g1', direction: 'horizontal', length: 10 })
  ).toBe(true);
  expect(
    gameboard.place({ start: 'h1', direction: 'horizontal', length: 10 })
  ).toBe(true);
  expect(
    gameboard.place({ start: 'i1', direction: 'horizontal', length: 10 })
  ).toBe(true);
  expect(
    gameboard.place({ start: 'j1', direction: 'horizontal', length: 9 })
  ).toBe(true);
  player.attack({ gameboard });
  expect(gameboard.board.j10).toBe('miss');
});

test('Player: test attack', () => {
  const gameboard = Gameboard();
  const player = Player();

  player.attack({ gameboard, coordinates: 'a1' });
  expect(gameboard.board.a1).toBe('miss');
});
