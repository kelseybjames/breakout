var controller = {
  addBrickToBoard: function(brick) {
    if (brick) {
      var $brickHTML = "<div class='brick' style='top:" + brick.top + "px;left:" + brick.left + "px'></div>";
      $('.breakout-container').append($brickHTML);
    };
  },

  addBallToBoard: function(ball) {
    var $ballHTML = "<div class='ball'></div>";
    $('.breakout-container').append($ballHTML);
  },

  checkBorderCollision: function() {
    var $ballDiv = $('.ball');
    var $gameDiv = $('.breakout-container');
    return !(collision($ballDiv, $gameDiv));
  },

  checkBrickCollision: function() {
    var $ballDiv = $('.ball');
    var $brickDiv = $('.brick');
    $brickDiv.each(function() {
      if (directedCollision($ballDiv, $(this))) {
        return (directedCollision($ballDiv, $(this)));
      };
    })
  },

  checkPaddleOneCollision: function() {
    var $ballDiv = $('.ball');
    var $paddleDiv = $('.player-1');
    return collision($ballDiv, $paddleDiv);
  },

  checkPaddleTwoCollision: function() {
    var $ballDiv = $('.ball');
    var $paddleDiv = $('.player-2');
    return collision($ballDiv, $paddleDiv);
  },

  deleteBrick: function(brick) {
    model.brickArray[brick.id] = undefined;
  }, 

  renderBricks: function(brickArray) {
    brickArray.forEach(controller.addBrickToBoard);
  },

  init: function() {
    // model.generateBricks();
    brickArray = model.brickArray;
    ball = model.generateBall();
    view.init(brickArray, ball);
    view.movePaddleOne();
    view.movePaddleTwo();
    view.moveBall(ball);
    view.updateScore();
  },
}