import React from "react";

import Board from "./board";

import * as Minesweeper from "../minesweeper";

console.log(Minesweeper);
class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(9, 10)
    }

    this.updateGame = this.updateGame.bind(this);
  }
  render () {
    return(
      <div>
        <Board prop1={this.state.board} prop2={this.updateGame}></Board>
      </div>
    );
  }

  updateGame () {

  }
}

export default Game;