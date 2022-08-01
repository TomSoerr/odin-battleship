export default function Dom() {
  const create = (type = 'div') => document.createElement(type);

  const content = create();
  content.id = 'content';
  content.textContent = 'Hello';
  document.body.append(content);

  (function buildMainPage() {
    const x = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const y = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    const header = create('h1');
    header.id = 'header';
    header.textContent = 'Battleship';

    const playerBoard = create();
    playerBoard.classList.add('gameboard');

    // TODO:
    // update zshrc with jest.config.js
    // add an object with each board dom elements on it
    // add event listeners to one board
    // if a ship is on a cell there should be a class added
    // after each turn the classes are rerendered
    // the player obj needs to call the rerender
    // the one board must be able to call the player attack function
    // after the attack is called the event listener should be deleted
    // popup to place the board with the real gameboard object
    // computer player obj needs to place the ships randomly

    y.forEach((row) => {
      const rowContainer = create();
      x.forEach((column) => {
        const cell = create();
        cell.id = row + column;
        cell.classList.add('board-cell');
        rowContainer.append(cell);
      });
      playerBoard.append();
    });

    const enemyBoard = create();
    enemyBoard.classList.add('gameboard');
  })();

  (function buildPlaceShipPopup() {})();
}
