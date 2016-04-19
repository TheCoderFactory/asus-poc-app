$(document).on("page:change", function() {
  var grid = $('#grid');
  var bottomBarrier = $('#bottom_barrier');
  var middleBarrier = $('#middle_barrier');
  var topBarrier = $('#top_barrier');
  var rightBarrier = $('#right_barrier');
  var ball = $('#ball');
  var star = $('#star');
  var gridPosition = grid.offset();
  var bot = bottomBarrier.offset();
  console.log("Top: " + bot.top + " Left: " + bot.left);
  bottomBarrier.offset({ top: gridPosition.top + -200, left: gridPosition.left + 5 });
  middleBarrier.offset({ top: gridPosition.top + -500, left: gridPosition.left + 108 });
  rightBarrier.offset({ top: gridPosition.top + -800, left: gridPosition.left + 416 });
  topBarrier.offset({ top: gridPosition.top + -600, left: gridPosition.left + -192 });
  ball.offset({ top: gridPosition.top + -400, left: gridPosition.left - 82 });
  star.offset({ top: gridPosition.top + -800, left: gridPosition.left + 122 });
  var bot = bottomBarrier.offset();
  console.log("Top: " + bot.top + " Left: " + bot.left);

  var response = "";
  var answer = "moveRight(5), moveUp(2), moveLeft(5), moveUp(3), moveRight(3), moveDown(1)"

  // Check if answer is correct
  $('#attempt-box').keyup(function(event) {
      if($('#attempt-box').val() == answer) {
        console.log("Working! and correct");
        $("#attempt-box").attr("disabled", true);
        // Launch modal
        $('#myModal').modal('show')
      }
      response = $('#attempt-box').val();
  });

  // Reset the input box
  $('#reset-btn').click(function() {
    console.log("Reset btn clicked");
    response = "";
    $("#attempt-box").attr("disabled", false);
    $('#attempt-box').val("");
  });
});

