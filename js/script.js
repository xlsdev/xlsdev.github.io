$(document).ready(function(){

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 64){
      $(".navbar").removeClass('bg-trasnparent').addClass('bg-black-2');
    } else{
      $(".navbar").removeClass('bg-black-2').addClass('bg-trasnparent');
    }
  })

  $('.navbar-toggler').click(function(){
    $('.navbar').removeClass('bg-trasnparent').toggleClass('bg-black-2');
  });

});