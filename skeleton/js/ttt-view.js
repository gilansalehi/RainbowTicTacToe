var View = function (game, $el) {
  this.$el = $el;
  this.game = game;
};

View.prototype.bindEvents = function () {
  $(".ttt").on("click", "li", function (e) {
    var $square = $(e.currentTarget);
    this.makeMove($square);

  }.bind(this));
};

View.prototype.makeMove = function ($square) {
  var posY = 0;

  var childN = $square.parent().children().index($square);

  while (childN > 2){
    childN -= 3;
    posY += 1;
  }
  this.game.playMove([childN, posY]);

  var mark = this.game.currentPlayer;

  $square.html(mark.toUpperCase());

  if(this.game.board.isOver()){
    if(this.game.board.winner()){
      setInterval(function(){
        $(".ttt strong").html(mark.toUpperCase() + " wins! You are an amazing person!");
        $(".ttt strong").css({color: "#" + Math.floor(Math.random()*256*256*255).toString(16)});
        $("body").css({background: "#" + Math.floor(Math.random()*256*256*256).toString(16)});
        $(".ttt li, .ttt ul").css({border: "3px solid #" + Math.floor(Math.random()*256*256*256).toString(16)});
      },
      100);
    }else{
      $(".ttt strong").html("Everybody wins! Except your eyeballs!");

  }
    // alert(mark.toUpperCase() + " wins! You are an amazing person!");
  }
};

View.prototype.setupBoard = function () {

  var grid = "<ul class='group'><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul><strong></strong>";
  this.$el.html(grid);
  $("body").css({background: "#" + Math.floor(Math.random()*256*256*255).toString(16)});
  $(".ttt li, .ttt ul").css({border: "3px solid #" + Math.floor(Math.random()*256*256*256).toString(16)});
};

module.exports = View;
