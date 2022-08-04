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

  const f = (l) => (obj) => board.place({ ...obj, length: l });
  const placeShips = function* placeShipsOnGameboard() {
    yield ['Carrier', 5, f(5)];
    yield ['Battleship', 4, f(4)];
    yield ['Cruiser', 3, f(3)];
    yield ['Destroyer', 2, f(2)];
    yield ['Destroyer', 2, f(2)];
    yield ['Submarine', 1, f(1)];
    yield ['Submarine', 1, f(1)];
  };

  return {
    attack,
    receiveAttack: board.receiveAttack,
    board: board.board,
    placeShips,
  };
}
