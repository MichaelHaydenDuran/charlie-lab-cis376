$(function(){
    var dogeModal = new bootstrap.Modal(document.getElementById('dogeModal'));
    var dogePic = $("#doge");
    dogePic.draggable();
    document.getElementById('dogeModal').addEventListener('hide.bs.modal', function (event) {
      dogePic.css('top', '0').css('left', '0').css("width","250px");
    });
    $("#hole").droppable({
        drop: function( event, ui ) {
          dogePic.animate({
            width: 0
          },
          {
            duration: 750,
            complete: function() {
              dogeModal.show();
            }
          });
        }
    });
});
