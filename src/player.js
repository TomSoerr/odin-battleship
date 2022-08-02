import Gameboard from './gameboard';

export default function Player() {
  const board = Gameboard();

  const attack = function attackEnemyGameboard({
    gameboard,
    coordinates = null,
  }) {
    if (coordinates === null) {
      const freeCoordinates = Object.entries(gameboard.board)
        .filter(([key, value]) => !value)
        .map(([key, value]) => key);
      gameboard.receiveAttack(
        freeCoordinates[Math.floor(Math.random() * freeCoordinates.length)]
      );
    } else {
      gameboard.receiveAttack(coordinates);
    }
  };
  const placeShips = function* placeShipsOnGameboard() {
    yield 'Carrier';
    yield (obj) => board.place({ ...obj, length: 5 });
  };

  return {
    attack,
    receiveAttack: board.receiveAttack,
    board: board.board,
    placeShips,
  };
}
