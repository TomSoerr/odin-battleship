import Player from './player';
import Dom from './dom';
import './style.css';

let player;
let computer;
let dom;

const checkWinner = function checkForAWinner() {
  if (
    Object.values(player.board).reduce((prev, curr) => {
      if (!prev) return false;
      if (typeof curr === 'function') {
        return false;
      }
      return true;
    }, true)
  ) {
    alert('computer is the winner');
    return true;
  }
  if (
    Object.values(computer.board).reduce((prev, curr) => {
      if (!prev) return false;
      if (typeof curr === 'function') {
        return false;
      }
      return true;
    }, true)
  ) {
    alert('player is the winner');
    return true;
  }
  return false;
};

const gameloop = function gameloop() {
  player = Player();
  computer = Player();
  if (dom) dom.remove();
  dom = Dom();

  dom.buildMainPage((coords) => {
    player.attack({ gameboard: computer, coordinates: coords });
    dom.render(player.board, computer.board);
    if (checkWinner()) gameloop();
    computer.attack({ gameboard: player });
    dom.render(player.board, computer.board);
    if (checkWinner()) gameloop();
  });

  dom.buildPlaceShipPopup(player.placeShips(), () => {
    computer.placeRandomShips();
    dom.render(player.board, computer.board);
  });
};

gameloop();
