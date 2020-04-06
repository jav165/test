$(document).ready( function(){

  $("#_hide").click(function(){
    $(".ingredients div:first-child ").hide();
  });

$("#_html").click(function() {
  $(".introp div:first-child").html("Enjoy your Meal!");
});


  $("#_Dark").click(function(){

        $("#Body").toggleClass("dark", true);
        $("#Body").toggleClass("light", false);
});
$("#_css").click(function(){
  $(".container2").css("background-color", "green");
})});
