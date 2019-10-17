const View = require("./ttt-view.js");
const Game = require("./game.js");

  $(() => {
    //create new instances after load page
    $el = $('.ttt');
    let game = new Game(); 
    let view = new View(game, $el);

  });
