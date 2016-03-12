var model = {
  brickArray: [],
  playerOneScore: 0,
  playerTwoScore: 0,

  generateBricks: function() {
    var defaultTop = 50;
    var defaultLeft = 150;
    for(i=0; i < 100; i++) {
      var brick = new brickConstructor();
      brick.left = defaultLeft + (50 * (i % 10));
      brick.top = defaultTop + (25 * Math.floor(i / 10));
      brick.id = i;
      this.brickArray.push(brick)
    }
  },


  generateBall: function() {
    var ball = new ballConstructor();
    return ball;
  }
}