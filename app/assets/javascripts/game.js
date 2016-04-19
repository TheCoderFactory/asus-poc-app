$(document).ready(function() {
  var grid = $('#grid');
  var bottomBarrier = $('#bottom_barrier');
  var middleBarrier = $('#middle_barrier');
  var topBarrier = $('#top_barrier');
  var rightBarrier = $('#right_barrier');
  var gridPosition = grid.offset();
  var bot = bottomBarrier.offset();
  console.log("Top: " + bot.top + " Left: " + bot.left);
  bottomBarrier.offset({ top: gridPosition.top + 400, left: gridPosition.left });
  var bot = bottomBarrier.offset();
  console.log("Top: " + bot.top + " Left: " + bot.left);
});
