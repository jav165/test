$(document).ready( function(){
  $(".title").lettering();
     $('#pagepiling').pagepiling();

  $   ("nanoGallery2");
  $("#_hide").click(function(){
    $(".ingredients").hide();
  });

$("#_html").click(function() {
  $(".introp").html("Enjoy your Meal!");
});
$("#_show").click(function(){
  $(".ingredients").show();
});


$("#_css").click(function(){
  $(".container2").css("background-color", "green");
});
});
