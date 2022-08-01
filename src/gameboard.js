import Ship from './ship';

export default function Gameboard() {
  const x = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const y = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const board = {};

  // to save some typing time
  y.forEach((elementX) => {
    x.forEach((elementY) => {
      board[elementX + elementY] = null;
    });
  });

  const place = function placeShip({ start, direction, length }) {
    const ship = Ship({ length });
    const { letter, number } = start.match(
      /^(?<letter>\w)(?<number>\d)$/
    ).groups;
    let yStart = y.indexOf(letter);
    let xStart = x.indexOf(number);
    const coordinates = [];

    for (let a = 0; a < length; a += 1) {
      if (board[y[yStart] + x[xStart]] === null) {
        coordinates.push(y[yStart] + x[xStart]);
      } else {
        return false;
      }
      if (direction === 'vertical') {
        yStart += 1;
      } else if (direction === 'horizontal') {
        xStart += 1;
      }
    }

    const callHit = (position) => () => {
      ship.hit({ relativeCoordinates: position });
      return ship.isSunk();
    };

    coordinates.forEach((coordinate, index) => {
      board[coordinate] = callHit(index);
    });

    return true;
  };

  const checkAllSunk = function checkIfAllShipsHaveSunk() {
    return Object.values(board).every(
      (element) => typeof element !== 'function'
    );
  };

  const receiveAttack = function receiveAttack(coordinates) {
    if (typeof board[coordinates] === 'function') {
      const isSunk = board[coordinates]();
      board[coordinates] = 'hit';
      if (isSunk) {
        if (checkAllSunk()) {
          return 'allSunk';
        }
        return 'sunk';
      }
      return 'hit';
    }
    board[coordinates] = 'miss';
    return 'miss';
  };

  return {
    board,
    place,
    receiveAttack,
  };
}
