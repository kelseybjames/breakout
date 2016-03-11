var view = {

  init: function(brickArray, ball) {
    console.log('setting up');
    controller.renderBricks(brickArray);
    controller.addBallToBoard(ball);
  },

  outOfBounds: function() {
    $boardDiv = $('.breakout-container');
    $ballDiv = $('.ball');
    return (!collision($boardDiv, $ballDiv));
  },
  
  movePaddle: function() {

    window.addEventListener('keydown', function(eventObject) {
      pressedKey = eventObject.code;
      
      refreshIntervalId = setTimeout(function() {
        var $paddleDiv = $('.paddle');
        var left = parseInt($paddleDiv.css('left'));

        switch (pressedKey) {
        case 'ArrowRight':
          $paddleDiv.css( 'left', Math.min(left + 15, 680 ));
          break;

        case 'ArrowLeft':
          $paddleDiv.css( 'left', Math.max(left - 15, 0 ));
          break;
        
        default:    
          break;
      };
    }, 10);
 
    });
  },

  moveBall: function(ball) {
    
    var horizontal = ball.horizontal;
    var vertical = ball.vertical;

    var refreshIntervalId = setInterval(function() {
      var $ballDiv = $('.ball');
      var top = parseInt($ballDiv.css('top'));
      var left = parseInt($ballDiv.css('left'));
      $ballDiv.css( 'left', left + (horizontal * 10 ));
      $ballDiv.css( 'top', top + (vertical * 10 ));
    }, 40);

    var collisionIntervalId = setInterval(function() {
      var $ballDiv = $('.ball');
      borderCollision = controller.checkBorderCollision();
      brickCollision = controller.checkBrickCollision();
      paddleCollision = controller.checkPaddleCollision();

      if (borderCollision) {
        var ballLeft = parseInt($ballDiv.css('left'));
        var ballTop = parseInt($ballDiv.css('top'));
        console.log(ballLeft);
        console.log(ballTop);
        if (ballLeft > 760) {
          horizontal = -1;
        } else if (ballLeft < 40) {
          horizontal = 1;
        } else if (ballTop > 560) {
          vertical = -1;
        } else if (ballTop < 40) {
          vertical = 1;
        };
      };

      switch (brickCollision) {
        case 'top':
          vertical *= -1;
          break;
        case 'bottom':
          vertical *= -1;
          break;
        case 'left':
          horizontal *= -1;
          break;
        case 'right':
          horizontal *= -1;
          break;
        default:
          break;
      }

      if (paddleCollision) {
        vertical = -1;
      }
    }, 100);
  },

}