export default function Dom() {
  const create = (type = 'div') => document.createElement(type);

  const content = create();
  content.id = 'content';
  document.body.append(content);

  const y = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const x = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const buildBoard = function buildBoard(boardContainer, board = null) {
    y.forEach((row) => {
      const rowContainer = create();
      rowContainer.classList.add('board-row');
      x.forEach((column) => {
        const cell = create();
        if (board !== null) board[row + column] = cell;
        cell.classList.add('board-cell');
        rowContainer.append(cell);
      });
      boardContainer.append(rowContainer);
    });
  };

  // TODO: this function could be put in its own file later
  const getShipCoordinates = function getShipCoordinates({
    start,
    direction,
    length,
  }) {
    const coordinates = [];
    const { letter, number } = start.match(
      /^(?<letter>\w)(?<number>\d{1,2})$/
    ).groups;
    let yStart = y.indexOf(letter);
    let xStart = x.indexOf(number);
    for (let a = 0; a < length; a += 1) {
      if (yStart < 10 && xStart < 10) {
        coordinates.push(y[yStart] + x[xStart]);
        if (direction === 'vertical') {
          yStart += 1;
        } else if (direction === 'horizontal') {
          xStart += 1;
        }
      } else {
        break;
      }
    }
    return coordinates;
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

  // build the popup to place the ships on the board
  const buildPlaceShipPopup = function buildPlaceShipPopup(
    placeShips,
    startGame
  ) {
    const popupContainer = create();
    popupContainer.id = 'popup';
    const popupBackgroundContainer = create();
    popupBackgroundContainer.id = 'popup-background';

    const header = create('h2');
    header.textContent = 'Place your ships';

    const shipName = create('p');
    let length;
    let place;
    [shipName.textContent, length, place] = placeShips.next().value;

    // to place the ships vertical and horizontal
    let vertical = false;
    const rotateButton = create('button');
    rotateButton.id = 'rotate-button';
    rotateButton.textContent = 'Rotate';
    rotateButton.addEventListener('click', () => {
      vertical = !vertical;
    });

    // board where the ships are placed on 10x10
    const selectBoardContainer = create();
    selectBoardContainer.classList.add('gameboard');
    let selectBoard = {};
    buildBoard(selectBoardContainer, selectBoard);

    // add an eventListener on each board cell with a linked function from
    // the playerBoard. The getShipCoordinates will return a array with
    // coordinates that should be colored
    Object.entries(selectBoard).forEach(([key, value]) => {
      value.classList.add('select');
      value.addEventListener('click', () => {
        const direction = vertical ? 'vertical' : 'horizontal';
        if (place({ start: key, direction })) {
          getShipCoordinates({ length, direction, start: key }).forEach(
            (coordinates) => {
              selectBoard[coordinates].classList.add('ship');
            }
          );
          const genValue = placeShips.next().value;
          // check if all ships are placed
          if (genValue !== undefined) {
            [shipName.textContent, length, place] = genValue;
          } else {
            popupBackgroundContainer.remove();
            selectBoard = null;
            startGame();
          }
        }
      });
      value.addEventListener('mouseenter', () => {
        const direction = vertical ? 'vertical' : 'horizontal';
        getShipCoordinates({ length, direction, start: key }).forEach(
          (coordinates) => {
            selectBoard[coordinates].classList.add('hover');
          }
        );
      });
      value.addEventListener('mouseleave', () => {
        const direction = vertical ? 'vertical' : 'horizontal';
        getShipCoordinates({ length, direction, start: key }).forEach(
          (coordinates) => {
            selectBoard[coordinates].classList.remove('hover');
          }
        );
      });
    });

    popupContainer.append(header, shipName, rotateButton, selectBoardContainer);
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
