$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#walrus-showing").slideDown();
    
  });

  $(".clickable2").click(function() {

    $("#walrus-showing").slideToggle();
  });

});