var controller = {
  addBrickToBoard: function(brick) {
    var $brickHTML = "<div class='brick' style='top:" + brick.top + "px;left:" + brick.left + "px'></div>";
    $('.breakout-container').append($brickHTML);
  },

  init: function() {
    brickArray = model.generateBricks();
    view.init(brickArray);
  }
}