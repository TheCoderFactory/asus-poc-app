var attempt, instr_no, tm;
var grid, bottomBarrier, middleBarrier, topBarrier, rightBarrier, ball, star;
var gridPosition, ballOffset, starOffset, topBarrierPosition, middleBarrierPosition, bottomBarrierPosition, rightBarrierPosition;
$(document).on("page:change", function() {
  console.log(screen.width);
  $('#run-btn').show();
  grid = $('#grid');
  bottomBarrier = $('#bottom_barrier');
  middleBarrier = $('#middle_barrier');
  topBarrier = $('#top_barrier');
  rightBarrier = $('#right_barrier');
  ball = $('#ball');
  star = $('#star');
  grid.offset({ top: 150, left: ($(window).width()/2)+50 });
  gridPosition = grid.offset();
  bottomBarrier.offset({ top: gridPosition.top + 400, left: gridPosition.left });
  bottomBarrierPosition = bottomBarrier.offset();
  middleBarrier.offset({ top: gridPosition.top + 200, left: gridPosition.left + 100 });
  middleBarrierPosition = middleBarrier.offset();
  topBarrier.offset({ top: gridPosition.top + 100, left: gridPosition.left + 100 });
  topBarrierPosition = topBarrier.offset();
  rightBarrier.offset({ top: gridPosition.top, left: gridPosition.left + 400 });
  rightBarrierPosition = rightBarrier.offset();
  ball.offset({ top: gridPosition.top + 500 , left: gridPosition.left });
  star.offset({ top: gridPosition.top + 100, left: gridPosition.left + 300 });

  var response = "";
  var answer = "moveRight(5), moveUp(2), moveLeft(5), moveUp(3), moveRight(3), moveDown(1)";

  $('#run-btn').click(function() {
    $('#reset-btn').show();
    console.log("Run btn clicked");
    attempt = $('#attempt-box').val();
    attempt = attempt.split(",");
    instr_no = 0;
    move();
  $('#attempt-box').val("");
  $('#attempt-box').focus();
  });

  $('#reset-btn').click(function() {
    console.log("Reset btn clicked");
    reset();
  });
  $('#modal-reset-btn').click(function() {
    console.log("Reset btn clicked");
    $('#myModal2').modal('hide')
      reset();
  });
});

function move() {
  if (instr_no == attempt.length) return;
  var currentPosition = ball.offset();
  var instruction = attempt[instr_no++];
  instruction = instruction.split("(");
  instruction[0] = instruction[0].trim();
  instruction[1] = parseInt(instruction[1].split(")"));
  switch (instruction[0]) {
    case "moveLeft":
      if (noCollision(instruction) == 0) {
        console.log("left");
        ball.animate({ left: currentPosition.left-(instruction[1]*100) }, 500, function () {
          ball.offset({ left: currentPosition.left-(instruction[1]*100) });
          console.log(ball.offset());
          console.log(star.offset());
          ballOffset = ball.offset();
          starOffset = star.offset();
          if (ballOffset.top == starOffset.top && ballOffset.left == starOffset.left) $('#myModal').modal('show');
          else if (outOfBounds(ballOffset) || wallCollision(ballOffset)) {
            $('#myModal2').modal('show');
            return;
          } else tm = setTimeout('move()', 1500);
        });
      } else {
        var length = noCollision(instruction);
        ball.animate({ left: currentPosition.left-(length*100) }, 500, function() {
          ball.offset({ left: currentPosition.left-(length*100) });
          ballOffset = ball.offset();
          starOffset = star.offset();
          if (ballOffset.top == starOffset.top && ballOffset.left == starOffset.left) $('#myModal').modal('show');
          if (outOfBounds(ballOffset) || wallCollision(ballOffset)) {
            $('#myModal2').modal('show');
            return;
          }
        });
      }
      break;
    case "moveRight":
      if (noCollision(instruction) == 0) {
        console.log("right");
        ball.animate({ left: currentPosition.left+(instruction[1]*100) }, 500, function () {
          ball.offset({ left: currentPosition.left+(instruction[1]*100) });
          console.log(ball.offset());
          console.log(star.offset());
          ballOffset = ball.offset();
          starOffset = star.offset();
          if (ballOffset.top == starOffset.top && ballOffset.left == starOffset.left) $('#myModal').modal('show');
          else if (outOfBounds(ballOffset) || wallCollision(ballOffset)) {
            $('#myModal2').modal('show');
            return;
          } else tm = setTimeout('move()', 1500);
        });
      } else {
        var length = noCollision(instruction);
        ball.animate({ left: currentPosition.left+(length*100) }, 500, function() {
          ball.offset({ left: currentPosition.left+(length*100) });
          ballOffset = ball.offset();
          starOffset = star.offset();
          if (ballOffset.top == starOffset.top && ballOffset.left == starOffset.left) $('#myModal').modal('show');
          if (outOfBounds(ballOffset) || wallCollision(ballOffset)) {
            $('#myModal2').modal('show');
            return;
          }
        });
      }
      break;
    case "moveUp":
      if (noCollision(instruction) == 0) {
        console.log("up");
        ball.animate({ top: currentPosition.top-(instruction[1]*100) }, 500, function () {
          ball.offset({ top: currentPosition.top-(instruction[1]*100) });
          console.log(ball.offset());
          console.log(star.offset());
          ballOffset = ball.offset();
          starOffset = star.offset();
          if (ballOffset.top == starOffset.top && ballOffset.left == starOffset.left) $('#myModal').modal('show');
          else if (outOfBounds(ballOffset) || wallCollision(ballOffset)) {
            $('#myModal2').modal('show');
            return;
          } else tm = setTimeout('move()', 1500);
        });
      } else {
        var length = noCollision(instruction);
        ball.animate({ top: currentPosition.top-(length*100) }, 500, function() {
          ball.offset({ top: currentPosition.top-(length*100) });
          ballOffset = ball.offset();
          starOffset = star.offset();
          if (ballOffset.top == starOffset.top && ballOffset.left == starOffset.left) $('#myModal').modal('show');
          if (outOfBounds(ballOffset) || wallCollision(ballOffset)) {
            $('#myModal2').modal('show');
            return;
          }
        });
      }
      break;
    case "moveDown":
      if (noCollision(instruction) == 0) {
        console.log("down");
        ball.animate({ top: currentPosition.top+(instruction[1]*100) }, 500, function () {
          ball.offset({ top: currentPosition.top+(instruction[1]*100) });
          console.log(ball.offset());
          console.log(grid.offset());
          ballOffset = ball.offset();
          starOffset = star.offset();
          if (ballOffset.top == starOffset.top && ballOffset.left == starOffset.left) $('#myModal').modal('show');
          else if (outOfBounds(ballOffset) || wallCollision(ballOffset)) {
            $('#myModal2').modal('show');
            return;
          } else tm = setTimeout('move()', 1500);
        });
      } else {
        var length = noCollision(instruction);
        ball.animate({ top: currentPosition.top+(length*100) }, 500, function() {
          ball.offset({ top: currentPosition.top+(length*100) });
          ballOffset = ball.offset();
          starOffset = star.offset();
          if (ballOffset.top == starOffset.top && ballOffset.left == starOffset.left) $('#myModal').modal('show');
          if (outOfBounds(ballOffset) || wallCollision(ballOffset)) {
            $('#myModal2').modal('show');
            return;
          }
        });
      }
      break;
    default:
      // incorrect text, reset
      $('#myModal2').modal('show')
  }
  // tm = setTimeout('move()', 1500);
}

function outOfBounds(itemOffset) {
  if (itemOffset.top < gridPosition.top || itemOffset.top >= gridPosition.top+600 || itemOffset.left < gridPosition.left || itemOffset.left >= gridPosition.left+600) return true;
  return false;
}

function wallCollision(itemOffset) {
  if (itemOffset.top >= bottomBarrierPosition.top && itemOffset.top < bottomBarrierPosition.top+100 && itemOffset.left >= bottomBarrierPosition.left && itemOffset.left < bottomBarrierPosition.left+500) return true;
  if (itemOffset.top >= middleBarrierPosition.top && itemOffset.top < middleBarrierPosition.top+100 && itemOffset.left >= middleBarrierPosition.left && itemOffset.left < middleBarrierPosition.left+300) return true;
  if (itemOffset.top >= topBarrierPosition.top && itemOffset.top < topBarrierPosition.top+100 && itemOffset.left >= topBarrierPosition.left && itemOffset.left < topBarrierPosition.left+200) return true;
  if (itemOffset.top >= rightBarrierPosition.top && itemOffset.top < rightBarrierPosition.top+300 && itemOffset.left >= rightBarrierPosition.left && itemOffset.left < rightBarrierPosition.left+100) return true;
  return false;
}

function noCollision(instruction) {
  var startOffset = ball.offset();
  for (var i = 0; i < instruction[1]; i++) {
    switch (instruction[0]) {
      case "moveLeft":
        startOffset.left-=100;
        if (wallCollision(startOffset) || outOfBounds(startOffset)) return i+1;
        break;
      case "moveRight":
        startOffset.left+=100;
        if (wallCollision(startOffset) || outOfBounds(startOffset)) return i+1;
        break;
      case "moveUp":
        startOffset.top-=100;
        if (wallCollision(startOffset) || outOfBounds(startOffset)) return i+1;
        break;
      case "moveDown":
        startOffset.top+=100;
        if (wallCollision(startOffset) || outOfBounds(startOffset)) return i+1;
        break;
      default:
    }
  }
  return 0;
}

function collisionDistance(instruction) {

}

function reset() {
  // Reset the input box
  ball.offset({ top: gridPosition.top + 500 , left: gridPosition.left });
  $('#attempt-box').val("");
  $('#reset-btn').hide();
  $('#run-btn').show();
}
