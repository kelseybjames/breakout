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

  updateScore: function() {
    var refreshScoreInterval = setInterval(function() {
      $('.score-1').html(model.playerOneScore);
      $('.score-2').html(model.playerTwoScore);
    }, 100);
  },
  
  movePaddleOne: function() {

    window.addEventListener('keydown', function(eventObject) {
      pressedKey = eventObject.code;
      
      refreshIntervalId = setTimeout(function() {
        var $paddleDiv = $('.player-1');
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

  movePaddleTwo: function() {

    window.addEventListener('keypress', function(eventObject) {
      pressedKey = eventObject.code;
      
      refreshIntervalId = setTimeout(function() {
        var $paddleDiv = $('.player-2');
        var left = parseInt($paddleDiv.css('left'));

        switch (pressedKey) {
        case 'KeyD':
          $paddleDiv.css( 'left', Math.min(left + 15, 680 ));
          break;

        case 'KeyA':
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
      $ballDiv.css( 'left', left + (horizontal * 10));
      $ballDiv.css( 'top', top + (vertical * 10));
    }, 50);

    var collisionIntervalId = setInterval(function() {
      var $ballDiv = $('.ball');
      borderCollision = controller.checkBorderCollision();
      brickCollision = controller.checkBrickCollision();
      paddleOneCollision = controller.checkPaddleOneCollision();
      paddleTwoCollision = controller.checkPaddleTwoCollision();

      if (borderCollision) {
        var ballLeft = parseInt($ballDiv.css('left'));
        var ballTop = parseInt($ballDiv.css('top'));
        if ((ballLeft > 760) && (horizontal === 1)) {
          horizontal = -1;
        } else if ((ballLeft < 40) && (horizontal === -1)){
          horizontal = 1;
        } else if ((ballTop > 560) && (vertical === 1)) {
          vertical = -1;
          model.playerOneScore++;
          $ballDiv.css( 'left', 350);
          $ballDiv.css( 'top', 300);
        } else if ((ballTop < 40) && (vertical === -1)) {
          vertical = 1;
          model.playerTwoScore++;
          $ballDiv.css( 'left', 350);
          $ballDiv.css( 'top', 300);
        };
      };

      // switch (brickCollision) {
      //   case 'top':
      //     vertical *= -1;
      //     break;
      //   case 'bottom':
      //     vertical *= -1;
      //     break;
      //   case 'left':
      //     horizontal *= -1;
      //     break;
      //   case 'right':
      //     horizontal *= -1;
      //     break;
      //   default:
      //     break;
      // }

      if (paddleOneCollision) {
        vertical = -1;
      }

      if (paddleTwoCollision) {
        vertical = 1;
      }
    }, 100);
  },

}