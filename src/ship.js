export default function Ship({ length }) {
  const ship = [];
  for (let x = 0; x < length; x += 1) {
    ship.push(true);
  }

  const hit = function gotHit(
    { relativeCoordinates } = {
      relativeCoordinates: null,
    }
  ) {
    if (relativeCoordinates == null)
      throw new Error("No 'relativeCoordinates'");
    if (relativeCoordinates < 0 || relativeCoordinates >= ship.length)
      throw new Error("Wrong 'relativeCoordinates'");

    ship[relativeCoordinates] = false;
  };

  const isSunk = () => ship.every((element) => !element);

  return {
    hit,
    isSunk,
  };
}
