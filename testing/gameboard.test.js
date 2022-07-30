/* eslint-disable no-undef */
import Gameboard from '../src/gameboard';

const emptyBoard = {
  a1: null,
  a2: null,
  a3: null,
  a4: null,
  a5: null,
  a6: null,
  a7: null,
  a8: null,
  a9: null,
  a10: null,
  b1: null,
  b2: null,
  b3: null,
  b4: null,
  b5: null,
  b6: null,
  b7: null,
  b8: null,
  b9: null,
  b10: null,
  c1: null,
  c2: null,
  c3: null,
  c4: null,
  c5: null,
  c6: null,
  c7: null,
  c8: null,
  c9: null,
  c10: null,
  d1: null,
  d2: null,
  d3: null,
  d4: null,
  d5: null,
  d6: null,
  d7: null,
  d8: null,
  d9: null,
  d10: null,
  e1: null,
  e2: null,
  e3: null,
  e4: null,
  e5: null,
  e6: null,
  e7: null,
  e8: null,
  e9: null,
  e10: null,
  f1: null,
  f2: null,
  f3: null,
  f4: null,
  f5: null,
  f6: null,
  f7: null,
  f8: null,
  f9: null,
  f10: null,
  g1: null,
  g2: null,
  g3: null,
  g4: null,
  g5: null,
  g6: null,
  g7: null,
  g8: null,
  g9: null,
  g10: null,
  h1: null,
  h2: null,
  h3: null,
  h4: null,
  h5: null,
  h6: null,
  h7: null,
  h8: null,
  h9: null,
  h10: null,
  i1: null,
  i2: null,
  i3: null,
  i4: null,
  i5: null,
  i6: null,
  i7: null,
  i8: null,
  i9: null,
  i10: null,
  j1: null,
  j2: null,
  j3: null,
  j4: null,
  j5: null,
  j6: null,
  j7: null,
  j8: null,
  j9: null,
  j10: null,
};

test('Gameboard: correct board (getBoard())', () => {
  const gameboard = Gameboard();

  expect(gameboard.board).toEqual(emptyBoard);

  expect(Object.keys(gameboard.board).length).toBe(100);
});

test('Gameboard: place a ship vertical', () => {
  const gameboard = Gameboard();
  expect(
    gameboard.place({ start: 'a1', direction: 'vertical', length: 4 })
  ).toBe(true);
  expect(typeof gameboard.board.a1).toBe('function');
  expect(typeof gameboard.board.b1).toBe('function');
  expect(typeof gameboard.board.c1).toBe('function');
  expect(typeof gameboard.board.d1).toBe('function');
});

test('Gameboard: place a ship horizontal', () => {
  const gameboard = Gameboard();
  expect(
    gameboard.place({ start: 'j7', direction: 'horizontal', length: 4 })
  ).toBe(true);
  expect(typeof gameboard.board.j7).toBe('function');
  expect(typeof gameboard.board.j8).toBe('function');
  expect(typeof gameboard.board.j9).toBe('function');
  expect(typeof gameboard.board.j10).toBe('function');
});

test('Gameboard: place two ships with overlap', () => {
  const gameboard = Gameboard();
  expect(
    gameboard.place({ start: 'e3', direction: 'horizontal', length: 4 })
  ).toBe(true);
  expect(
    gameboard.place({ start: 'c4', direction: 'vertical', length: 5 })
  ).toBe(false);
});

test('Gameboard: place ship outside of the board', () => {
  const gameboard = Gameboard();
  expect(
    gameboard.place({ start: 'j8', direction: 'horizontal', length: 4 })
  ).toBe(false);
  expect(gameboard.board).toEqual(emptyBoard);
});

test('Gameboard: sink one ship', () => {
  const gameboard = Gameboard();
  expect(
    gameboard.place({ start: 'e3', direction: 'horizontal', length: 2 })
  ).toBe(true);
  expect(gameboard.board.e3()).toBe(false);
  expect(gameboard.board.e4()).toBe(true);
});

test.todo('Gameboard: receiveAttack');
