import Player from './player';
import Dom from './dom';
import './style.css';

let player;
let computer;
let dom;

const gameloop = function gameloop() {
  player = Player();
  computer = Player();
  if (dom) dom.remove();
  dom = Dom();

  dom.buildMainPage((coords) => {
    let attackReturn = player.attack({
      gameboard: computer,
      coordinates: coords,
    });
    dom.render(player.board, computer.board);
    if (attackReturn === 'allSunk') {
      dom.announceWinner(`The player is the winner`);
      setTimeout(() => {
        gameloop();
      }, 5000);
    }
    attackReturn = computer.attack({ gameboard: player });
    dom.render(player.board, computer.board);
    if (attackReturn === 'allSunk') {
      dom.announceWinner(`The computer is the winner`);
      setTimeout(() => {
        gameloop();
      }, 5000);
    }
  });

  dom.buildPlaceShipPopup(player.placeShips(), () => {
    computer.placeRandomShips();
    dom.render(player.board, computer.board);
  });
};

gameloop();
