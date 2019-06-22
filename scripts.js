$(function() {
  $(".draggable").draggable({ grid: [40, 40] }, { opacity: 0.5 });
  $(".droppable").droppable({
    drop: function(event, ui) {
      $(this);
      var dropped = ui.draggable;
      var droppedIdentifier = ui.draggable.attr("data-identifier");
      if (event.target.dataset.identifier === droppedIdentifier) {
        var droppedOn = $(this);
        $(dropped)
          .detach()
          .css({ top: 0, left: 0 })
          .appendTo(droppedOn);
        $(dropped).draggable("destroy");
        var el = $(".alert");
        el.html("Great! Well done.");
        el.addClass("alert-success");
        el.removeClass("alert-info");
        el.removeClass("alert-danger");
      } else {
        $(dropped).draggable({ revert: "valid" });
        var el = $(".alert");
        el.html("Wrong! Try again.");
        el.addClass("alert-danger");
        el.removeClass("alert-info");
        el.removeClass("alert-success");
      }
      updateProgressBar();
    }
  });
});

var updateProgressBar = function() {
  var jigsawContainerLength = $("#zero div").length;
  var childrenContainers = 6
  var increaseUnitsEasy = function(newElements) {
    return Math.round((100 / childrenContainers) * newElements);
  };
  var childrenContainers = 6;
  var progressBarUnits = increaseUnitsEasy(jigsawContainerLength - childrenContainers);
  $("#progress-bar-id")
  .attr("aria-valuenow", progressBarUnits)
  .css("width", progressBarUnits + '%');
  //add class active
};
