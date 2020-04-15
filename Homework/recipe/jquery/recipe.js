$(document).ready( function(){

  $("#_hide").click(function(){
    $(".ingredients").hide();
  });

$("#_html").click(function() {
  $(".introp").html("Enjoy your Meal!");
});
$("#_show").click(function(){
  $(".ingredients").show();
});
$(".title").lettering();
   });
   jQuery("#nanoGallery1").nanoGallery({
 		kind:'flickr',
 		userID:'34858669@N00'
 	});
 });
 $('#_pagepiling').pagepiling();
});
$("#_css").click(function(){
  $(".container2").css("background-color", "green");
});
});
