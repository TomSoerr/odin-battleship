import Gameboard from './gameboard';
import Player from './player';
import Dom from './dom';
import './style.css';

Dom();

////////////////////////////////
function game() {
  const computer = Player();
  const computerGameboard = Gameboard();
  const player = Player();
  const playerGameboard = Gameboard();

  // return confirm('Want to play again');
  return false;
}

let playing = true;
while (playing) {
  playing = game();
}
window.close();
