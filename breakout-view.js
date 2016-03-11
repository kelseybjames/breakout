var view = {

  init: function(brickArray) {
    console.log('setting up');
    brickArray.forEach(controller.addBrickToBoard);
  },
}