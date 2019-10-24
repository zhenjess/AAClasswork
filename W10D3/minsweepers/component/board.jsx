import React from "react";

import Tile from "./tile";

class Board extends React.Component {
  constructor (props) {
    super (props);

  }

  render () {
    //board returns div that contains tile component (<Tile/>)
    return (
      <div>
        {this.props.board.grid.map((row, idx) => (
          <div key={idx} className="row">
            {row.map((tile, jdx) => (
              <Tile
                key = {[idx, jdx]}
                tile = {tile}
                updateGame={this.props.updateGame}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Board;