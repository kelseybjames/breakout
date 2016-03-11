var model = {
  generateBricks: function() {
    brickArray = [];
    var defaultTop = 50;
    var defaultLeft = 150;
    for(i=0; i < 100; i++) {
      var brick = new brickConstructor();
      brick.left = defaultLeft + (50 * (i % 10));
      brick.top = defaultTop + (25 * Math.floor(i / 10));
      brickArray.push(brick)
    }
    return brickArray;
  },
}