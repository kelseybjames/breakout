function collision($div1, $div2) {
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight();
  var w1 = $div1.outerWidth();
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight();
  var w2 = $div2.outerWidth();
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {return false;
  };
  return true;

}

function directedCollision($collider, $collided) {
  var left1 = $collider.offset().left;
  var top1 = $collider.offset().top;
  var height1 = $collider.outerHeight();
  var width1 = $collider.outerWidth();
  var bottom1 = top1 + height1;
  var right1 = left1 + width1;

  var left2 = $collided.offset().left;
  var top2 = $collided.offset().top;
  var height2 = $collided.outerHeight();
  var width2 = $collided.outerWidth();
  var bottom2 = top2 + height2;
  var right2 = left2 + width2;

  if ((top1 < bottom2) && (collision($collider, $collided))) {
    return 'bottom';
  };

  if ((bottom1 > top2) && (collision($collider, $collided))) {
    return 'top';
  }

  if ((left1 < right2) && (collision($collider, $collided))) {
    return 'right';
  }

  if ((right1 > left2) && (collision($collider, $collided))) {
    return 'left';
  }
  return false;
}

function brickConstructor() {
  this.color = '#663498';
  this.top = undefined;
  this.left = undefined;
  this.id = undefined;
}

function ballConstructor() {
  this.vertical = -1;
  this.horizontal = 1;
}

$(document).ready(function() {
  controller.init();
});