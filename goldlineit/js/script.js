// Fancybox //

Fancybox.bind( "[data-fancybox]");


// Owl Carousel //
  
  $(".carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });

