/**
 * Initializes the Piece with its color.
 */
// This function is a cnstructor function, with a Title case name
function Piece (color) {
  this.color = color;
}

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function () {
  return ((this.color === "white") ? "black" : "white");
};

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
  return (this.color = (this.color === "white") ? "black" : "white");
};

/**
 * Returns a string representation of the string
 * based on its color.
 */
Piece.prototype.toString = function () {
  return (this.color === "black" ? "B" : "W");
};

module.exports = Piece;

