var attempt, instr_no, ball;
$(document).on("page:change", function() {
  var grid = $('#grid');
  var bottomBarrier = $('#bottom_barrier');
  var middleBarrier = $('#middle_barrier');
  var topBarrier = $('#top_barrier');
  var rightBarrier = $('#right_barrier');
  ball = $('#ball');
  var star = $('#star');
  var gridPosition = grid.offset();
  var ballPosition = ball.offset();
  console.log(ballPosition.top);
  bottomBarrier.offset({ top: gridPosition.top + 400});
  middleBarrier.offset({ top: gridPosition.top + 200, left: gridPosition.left + 100 });
  topBarrier.offset({ top: gridPosition.top + 100, left: gridPosition.left + 100 });
  rightBarrier.offset({ left: gridPosition.left + 400 });
  ball.offset({ top: gridPosition.top + 500 });
  star.offset({ top: gridPosition.top + 100, left: gridPosition.left + 300 });
  var ballPosition = ball.offset();
  console.log(ballPosition.top);

  var response = "";
  var answer = "moveRight(5), moveUp(2), moveLeft(5), moveUp(3), moveRight(3), moveDown(1)"

  // Check if answer is correct
  // $('#attempt-box').keyup(function(event) {
      // if($('#attempt-box').val() == answer) {
        // console.log("Working! and correct");
        // $("#attempt-box").attr("disabled", true);
        // // Launch modal
        // $('#myModal').modal('show')
      // }
      // response = $('#attempt-box').val();
  // });
  $('#run-btn').click(function() {
    console.log("Run btn clicked");
    attempt = $('#attempt-box').val();
    attempt = attempt.split(",");
    instr_no = 0;
    move();
    // for (i = 0; i < attempt.length; i++) {
    // }
  });

  // Reset the input box
  $('#reset-btn').click(function() {
    console.log("Reset btn clicked");
    response = "";
    $("#attempt-box").attr("disabled", false);
    $('#attempt-box').val("");
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
  console.log(instruction);
  var tm = setTimeout('move()', 1500);
}
