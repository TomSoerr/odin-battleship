import Gameboard from './gameboard';

export default function Player() {
  const board = Gameboard();

  const attack = function attackEnemyGameboard({
    gameboard,
    coordinates = null,
  }) {
    if (coordinates === null) {
      const freeCoordinates = Object.entries(gameboard.board)
        .filter(([key, value]) => value !== 'hit' && value !== 'miss')
        .map(([key, value]) => key);
      return gameboard.receiveAttack(
        freeCoordinates[Math.floor(Math.random() * freeCoordinates.length)]
      );
    }
    return gameboard.receiveAttack(coordinates);
  };

  // generator function that returns each ship
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

  // function that places all ships randomly the brute force way
  const placeRandomShips = function placeRandomShipsForComputerPlayer() {
    const generateShips = placeShips();
    const direction = ['horizontal', 'vertical'];
    const x = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const y = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    while (true) {
      const obj = generateShips.next();
      const { value, done } = obj;
      if (done) break;
      const [, , placeFunction] = value;

      let coords;
      let dir;
      do {
        coords =
          y[Math.floor(Math.random() * y.length)] +
          x[Math.floor(Math.random() * x.length)];
        dir = direction[Math.floor(Math.random() * direction.length)];
      } while (!placeFunction({ start: coords, direction: dir }));
    }
    return true;
  };

  return {
    attack,
    receiveAttack: board.receiveAttack,
    board: board.board,
    placeShips,
    placeRandomShips,
  };
}
