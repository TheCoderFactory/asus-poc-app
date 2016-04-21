var attempt, instr_no;
var grid, bottomBarrier, middleBarrier, topBarrier, rightBarrier, ball, star;
var gridPosition;
$(document).on("page:change", function() {
  console.log(screen.width);
  $('#reset-btn').hide();
  $('#run-btn').show();
  grid = $('#grid');
  bottomBarrier = $('#bottom_barrier');
  middleBarrier = $('#middle_barrier');
  topBarrier = $('#top_barrier');
  rightBarrier = $('#right_barrier');
  ball = $('#ball');
  star = $('#star');
  var ballPosition = ball.offset();
  grid.offset({ top: 150, left: screen.width/2 });
  gridPosition = grid.offset();
  bottomBarrier.offset({ top: gridPosition.top + 400, left: gridPosition.left });
  middleBarrier.offset({ top: gridPosition.top + 200, left: gridPosition.left + 100 });
  topBarrier.offset({ top: gridPosition.top + 100, left: gridPosition.left + 100 });
  rightBarrier.offset({ top: gridPosition.top, left: gridPosition.left + 400 });
  ball.offset({ top: gridPosition.top + 500 , left: gridPosition.left });
  star.offset({ top: gridPosition.top + 100, left: gridPosition.left + 300 });
  var ballPosition = ball.offset();

  var response = "";
  var answer = "moveRight(5), moveUp(2), moveLeft(5), moveUp(3), moveRight(3), moveDown(1)"

  $('#run-btn').click(function() {
    $('#reset-btn').show();
    $('#run-btn').hide();
    console.log("Run btn clicked");
    attempt = $('#attempt-box').val();
    attempt = attempt.split(",");
    instr_no = 0;
    move();
  });

  $('#reset-btn').click(function() {
    console.log("Reset btn clicked");
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
      console.log("left");
      ball.animate({ left: currentPosition.left-(instruction[1]*100) }, 1000, function () {
        ball.offset({ left: currentPosition.left-(instruction[1]*100) });
      });
      break;
    case "moveRight":
      console.log("right");
      ball.animate({ left: currentPosition.left+(instruction[1]*100) }, 1000, function () {
        ball.offset({ left: currentPosition.left+(instruction[1]*100) });
      });
      break;
    case "moveUp":
      console.log("up");
      ball.animate({ top: currentPosition.top-(instruction[1]*100) }, 1000, function () {
        ball.offset({ top: currentPosition.top-(instruction[1]*100) });
      });
      break;
    case "moveDown":
      console.log("down");
      ball.animate({ top: currentPosition.top+(instruction[1]*100) }, 1000, function () {
        ball.offset({ top: currentPosition.top+(instruction[1]*100) });
      });
      break;
    default:
      // incorrect text, reset
        console.log("here");
  }
  console.log(ball.offset());
  console.log(star.offset());
  var tm = setTimeout('move()', 1500);
}

function reset() {
  // Reset the input box
  ball.offset({ top: gridPosition.top + 500 , left: gridPosition.left });
  $('#attempt-box').val("");
  $('#reset-btn').hide();
  $('#run-btn').show();
}
