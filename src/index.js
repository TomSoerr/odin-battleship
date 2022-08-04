import Gameboard from './gameboard';
import Player from './player';
import Dom from './dom';
import './style.css';

const player = Player();
const computer = Player();

const dom = Dom();
dom.buildMainPage();
dom.buildPlaceShipPopup(player.placeShips(), () => {
  console.log(player.board);
});

////////////////////////////////
// function game() {
//   const computer = Player();
//   const computerGameboard = Gameboard();
//   const player = Player();
//   const playerGameboard = Gameboard();

//   // return confirm('Want to play again');
//   return false;
// }

// let playing = true;
// while (playing) {
//   playing = game();
// }
// window.close();
