$(document).ready(function(){

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 64){
      $(".navbar").addClass('bg-black-2');
    } else{
      $(".navbar").removeClass('bg-black-2');
    }
  })

  $('.navbar-toggler').click(function(){
    $('.navbar').toggleClass('bg-black');
  });

});