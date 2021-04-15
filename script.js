$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  })
  
  //RESPONSIVE NAVBAR
  
  $(".toggle").click(function() {
       $('nav').slideToggle();
    });
    $(window).resize(function() {
       if ($(window).width() > 768) {
          $('#myNavbar ul').removeClass("togg");
         $('#myNavbar ul').addClass("navi-ul");
       } else {
          $('#myNavbar ul').removeClass("navi-ul");
          $('#myNavbar ul').addClass("togg");
       }
    });
  
})