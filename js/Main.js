$(function(){

	$("ul li a").click(function () {
	    elementClick = $(this).attr("href");
	    destination = $(elementClick).offset().top;
	    $("body,html").animate({scrollTop: destination }, 800);
	  });

	$("a").click(function () {
	    elementClick = $(this).attr("href");
	    destination = $(elementClick).offset().top;
	    $("body,html").animate({scrollTop: destination }, 1500);
	  });


	$(window).scroll(function() {
	$('.about-us , .botton').each(function(){
	          var imagePos = $(this).offset().top;
	 
	          var topOfWindow = $(window).scrollTop();
	          if (imagePos < topOfWindow+650) {
	              $(this).addClass("slideInRight");
	          }
		});
	});

    $(window).scroll(function() {
      $('.img-phone').each(function(){
          var imagePos = $(this).offset().top;
 
          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("slideInLeft");
          }
      });
    });

    $(window).scroll(function() {
      $('.macro').each(function(){
          var imagePos = $(this).offset().top;
 
          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+340) {
              $(this).addClass("slideInLeft");
         }
      });
    });


 $('.slider').slick({
 	slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
   responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});



});