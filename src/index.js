import Gameboard from './gameboard';
import Player from './player';
import Dom from './dom';
import './style.css';

Dom();

function Gameloop() {
  const computer = Player();
  const computerGameboard = Gameboard();
  const player = Player();
  const playerGameboard = Gameboard();

  let playing = true;
  let currentPlayer = player;

  return false;
}

export default Gameloop;
