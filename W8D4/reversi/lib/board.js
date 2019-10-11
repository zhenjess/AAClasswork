let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let grid = new Array(); // []
  for (let i = 0; i < 8; i++) {
    let row = new Array(8);
    grid.push(row);
  }

  grid[3][4] = new Piece("black");
  grid[4][3] = new Piece("black");
  grid[3][3] = new Piece("white");
  grid[4][4] = new Piece("white");

  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
//pos = [x,y]
Board.prototype.getPiece = function (pos) {
  
  if (this.grid[pos[0]][pos[1]]) {
    return this.grid[pos[0]][pos[1]];
  } else {
    return undefined;
    //throw "Invalid position";
  }
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  //validMoves returns an array and checks if there are any valid moves
  return (this.validMoves(color).length > 0); 
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  return (this.getPiece(pos) && this.getPiece(pos).color === color)
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  return !!(this.grid[pos[0]][pos[1]]); //grid[][]
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  //if black doesn't have moves = !this.hasMove("black")
  //if white doesn't have moves = !this.hasMove("white")
  //if both are false then return true
  return (!this.hasMove("black")) && (!this.hasMove("white"));
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  // x = 0..8
  // y = 0..8
  return (pos[0] >= 0 && pos[0] < 8) && (pos[1] >= 0 && pos[1] < 8);
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
  if (!piecesToFlip) {
    let piecesToFlip = [];
  } else {
    piecesToFlip.push(pos);
  }

  let nextPos = [pos[0] + dir[0], pos[1] + dir[1]];
//if empty position or if not a valid position return false (is off the board)
  if (!board.isOccupied(nextPos) || !board.isValidPos(nextPos)) {
    return null;
    //if is the same color and haven't found position of the opposite color return null
  } else if (board.isMine(nextPos, color)) {
    //else if is the same color but have found the positions, return the positions
    return (piecesToFlip.length > 0 ? piecesToFlip : null)
  } else {
    //recursive call, if pass all base case, then is the opposite color,
    //then make the next position as the curent position and check directions from there
    return _positionsToFlip(board, nextPos, color, dir, piecesToFlip);
  }
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (this.isValidPos(pos) && this.validMove(pos, color)) {
    this.grid[pos[0]][pos[1]] = new Piece(color);
    let posArray = _positionsToFlip(this, pos, color, Board.DIRS, posArray);
    posArray.forEach( function (pos) {
      this.getPiece(pos).flip();
    });
  } else {
    throw "Invalid position";
  }
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  for (let i = 0; i < 8; i++) {
    let row = "";
    for (let j = 0; j < 8; j++) {      
      if (this.grid[i][j]) {
        row += ((this.grid[i][j]).toString() + " ");
      } else {
        row += "  ";
      }  
    }
    console.log(`${row}`);
  }
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
// _positionsToFlip is called and returns an array and saves to posArray
Board.prototype.validMove = function (pos, color) {
  let arrayPos = [];
  for (let i=0; i<Board.DIRS.length; i++) {
    arrayPos = _positionsToFlip(this, pos, color, Board.DIRS[i], arrayPos);
    if (arrayPos) {      
      continue;
    } else {
      break;
    }
  }
  arrayPos = [2,3];
  return (!this.isOccupied(pos) && arrayPos.length > 0);
  
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  valid_position = [];

  // iterate through the board grid and return the current pos if there is valid move.
  // valid move is from .validMove function which returns a boolean
  // if true, push position into valid_position
  for (let i =0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {          
      if (this.validMove([i, j], color)) { valid_position.push([i, j])};
    }
  }
  return valid_position;
};

module.exports = Board;

let board1 = new Board();
board1.validMove([2,3], "black")
// console.log(board1);


