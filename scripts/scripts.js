$(document).ready(function(){
    var dogeModal = new bootstrap.Modal(document.getElementById('dogeModal'));
    $("#doge").draggable();
    $("#hole").droppable({
        drop: function( event, ui ) {
          dogeModal.show();
        }
    });
});
