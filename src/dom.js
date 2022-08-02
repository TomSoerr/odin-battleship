export default function Dom() {
  const create = (type = 'div') => document.createElement(type);

  const content = create();
  content.id = 'content';
  document.body.append(content);

  const buildBoard = function buildBoard(boardContainer, board = null) {
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'].forEach((row) => {
      const rowContainer = create();
      rowContainer.classList.add('board-row');
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].forEach((column) => {
        const cell = create();
        if (board !== null) board[row + column] = cell;
        cell.classList.add('board-cell');
        rowContainer.append(cell);
      });
      boardContainer.append(rowContainer);
    });
  };

  const buildMainPage = function buildMainPage() {
    const header = create('h1');
    header.id = 'header';
    header.textContent = 'Battleship';

    const playerBoardContainer = create();
    playerBoardContainer.classList.add('gameboard');
    const playerBoard = {};
    buildBoard(playerBoardContainer, playerBoard);

    playerBoard.a1.classList.add('hit', 'ship');
    playerBoard.a2.classList.add('water');

    const enemyBoardContainer = create();
    enemyBoardContainer.classList.add('gameboard');
    const enemyBoard = {};
    buildBoard(enemyBoardContainer, enemyBoard);
    Object.entries(enemyBoard).forEach(([key, value]) => {
      value.classList.add('enemy');
      // value.addEventListener(() => enemy(key));
    });

    const boardsContainer = create();
    boardsContainer.id = 'gameboard-wrapper';
    boardsContainer.append(playerBoardContainer, enemyBoardContainer);

    const footer = create('p');
    footer.id = 'footer';
    const footerLink = create('a');
    footerLink.textContent = 'View Project On Github';
    footerLink.href = 'https://github.com/TomSoerr/odin-battleship';
    footer.append(footerLink);

    content.append(header, boardsContainer, footer);
  };

  const buildPlaceShipPopup = function buildPlaceShipPopup(placeShips) {
    const header = create('h2');
    header.textContent = 'Place your ships';

    const shipName = create('p');
    shipName.textContent = 'some';

    let vertical = true;
    const rotateButton = create('button');
    rotateButton.id = 'rotate-button';
    rotateButton.textContent = 'Rotate';
    rotateButton.addEventListener('click', () => {
      vertical = !vertical;
    });

    const selectBoardContainer = create();
    selectBoardContainer.classList.add('gameboard');
    const selectBoard = {};
    buildBoard(selectBoardContainer, selectBoard);

    const place = () => {};

    Object.entries(selectBoard).forEach(([key, value]) => {
      value.classList.add('select');
      value.addEventListener('click', () => place(key));
    });

    const popupContainer = create();
    popupContainer.id = 'popup';
    popupContainer.append(header, shipName, rotateButton, selectBoardContainer);

    const popupBackgroundContainer = create();
    popupBackgroundContainer.id = 'popup-background';
    popupBackgroundContainer.append(popupContainer);

    content.append(popupBackgroundContainer);
  };

  // render function

  return {
    buildMainPage,
    buildPlaceShipPopup,
  };
}

// TODO:
// add event listeners to one board
// if a ship is on a cell there should be a class added
// after each turn the classes are rerendered
// the player obj needs to call the rerender
// the one board must be able to call the player attack function
// after the attack is called the event listener should be deleted
// popup to place the board with the real gameboard object
// computer player obj needs to place the ships randomly
