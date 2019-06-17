$(function() {
  $("#draggable").draggable(
    { grid: [40, 40] },
    { opacity: 0.5 }, 
  );
  $("#droppable").droppable({
    drop: function(event, ui) {
      $(this);
      var dropped = ui.draggable;
      var droppedIdentifier = ui.draggable.attr("data-identifier");
      var droppedOn = $(this);
      $(dropped)
        .detach()
        .css({ top: 0, left: 0 })
        .appendTo(droppedOn);
      if (event.target.dataset.identifier === droppedIdentifier) {
        console.log("success");
      } else {
        console.log("wrong");
      }
    }
  });
});
