var View = require('./ttt-view');
var Game = require('../../ttt-core-solution/game');

$(function () {
  // Your code here
  window.tictactoe = window.tictactoe || {};

  var $container = $(".ttt");
  // console.log($container);
  var g = new Game();
  var v = new View(g, $container);


  console.log("setting up...");
  v.setupBoard();

  console.log("set up");

  v.bindEvents();


  // g.run();
});
