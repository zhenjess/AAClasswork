class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
    this.bindEvents();
    this.POS = [
      [0, 0], [0, 1], [0, 2],
      [1, 0], [1, 1], [1, 2],
      [2, 0], [2, 1], [2, 2]
    ];
  }

  


  bindEvents() {
    // What is the user clicking on?
    // this.makeMove()
    let that = this;
    $('li').on('click', function (e) {
      let $li = $(e.target);
      let $pos = $li.attr('id');
      let idx = parseInt($pos);
      let coord = that.POS[idx];
      that.makeMove(coord);
    });

  }

  makeMove($square) {
    // Once we find what the user is clicking on, make the move for them on that square. 
    // playMove(pos)
    this.game.playMove($square);
    
    if (this.game.currentPlayer === "x") {
      $li.addClass("disc");
    } else {
      $li.addClass("disc");
    }
  }

  setupBoard() {
    const $ul = $("<ul></ul>");
    for (let i = 0; i < 9; i++) {
      const $li = $("<li></li>");
      $li.attr('id', `${i}`);
      $ul.append($li);
    }

    this.el.append($ul);
    
    //create list elements <li> already styled
    // and add to ul <ul> then append to <el> and goes to (.ttt)
  }

}

module.exports = View;

