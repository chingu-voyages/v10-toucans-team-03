$(document).ready(function() {
  
$(window).resize(function(){
    if ($(window).width() >= 980){  

   // effect: hover a tab toggle & shows the dropdown menu
      $(".navbar .dropdown-toggle").hover(function() {
         $(this).parent().toggleClass("show");
         $(this).parent().find(".dropdown-menu").toggleClass("show"); 
       });

    // effect: hide menu when mouse/cursor leaves the dropdown
      $( ".navbar .dropdown-menu" ).mouseleave(function() {
        $(this).removeClass("show");  
      });
  
        // end of effect
    }   
});  
  

});