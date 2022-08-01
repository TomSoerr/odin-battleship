export default function Player() {
  const attack = function attackEnemyGameboard({
    gameboard,
    coordinates = null,
  }) {
    if (coordinates === null) {
      const freeCoordinates = Object.entries(gameboard.board)
        .filter(([key, value]) => !value)
        .map(([key, value]) => key);
      gameboard.receiveAttack(
        freeCoordinates[Math.floor(Math.random() * freeCoordinates.length)]
      );
    } else {
      gameboard.receiveAttack(coordinates);
    }
  };
  return {
    attack,
  };
}
