/*--------------------------------------------------
Project:        App-Landing
Version:        1.0
Author:         Company Name
-----------------------------------------------------

    JS INDEX
    ================================================
    * preloader js
    * One Page Scroll
    * slick Menu js 
    * slick Nav
    * testimonial slider
    * Counter
    * bottom to top
    * Google-Map
    ================================================*/

    (function ($) {
        "use strict";
        var $main_window = $(window);
        /*====================================
            preloader js
          ======================================*/
        $main_window.on('load', function () {
            $('#preloader').fadeOut('slow');
        });

         /*====================================
                One Page Scroll
    ======================================*/
   
    // Select all »a« elements with a parent class »links« and add a function that is executed on click
    $('.navbar-nav .nav-item a').on('click', function (e) {
        // Define variable of the clicked »a« element (»this«) and get its href value.
        var href = $(this).attr('href');
        // Run a scroll animation to the position of the element which has the same id like the href value.
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, '300');
        // Prevent the browser from showing the attribute name of the clicked link in the address bar
        e.preventDefault();
    });

/*====================================
            slick slider
        ======================================*/
      $('.one-time').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  responsive: [{
    breakpoint: 768,
    settings: {
        arrows: false,
        dots:true
       
    }
}]
});

$('.product-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    slidesToShow: 2
                }
            }, {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    slidesToShow: 2
                },
                
                    breakpoint: 500,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                    }
            }]
});

$('.features-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
                  breakpoint: 1200,
                  settings: {
                      arrows: true,
                      slidesToShow: 2
                  }
              }, {
                  breakpoint: 992,
                  settings: {
                      arrows: true,
                      slidesToShow: 2
                  },
                  
                      breakpoint: 500,
                      settings: {
                          arrows: true,
                          slidesToShow: 1,
                      }
              }]
  });
$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
                  breakpoint: 1200,
                  settings: {
                      arrows: true,
                      slidesToShow: 2
                  }
              }, {
                  breakpoint: 992,
                  settings: {
                      arrows: true,
                      slidesToShow: 2
                  },
                  
                      breakpoint: 500,
                      settings: {
                          arrows: true,
                          slidesToShow: 1,
                      }
              }]
  });
$('.watch-slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.watch-slider-nav'
});
$('.watch-slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.watch-slider-for',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  responsive: [{
                breakpoint: 1600,
                settings: {
                    arrows: true,
                    slidesToShow: 3
                } 
            }, {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    slidesToShow: 2
                },
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }

            
            }]
});

/*====================================
            sticky menu js
          ======================================*/
        var windows = $(window);
        var sticky = $('.header-fixed');
        windows.on('scroll', function () {
            var scroll = windows.scrollTop();
            if (scroll < 50) {
                sticky.removeClass('stick');
            } else {
                sticky.addClass('stick');
            }
        });
        /*====================================
            slick nav
        ======================================*/
        var logo_path = $('.mobile-menu').data('logo');
        $('.navbar-nav').slicknav({
            appendTo: '.mobile-menu',
            removeClasses: true,
            label: '',
            closedSymbol: '<i class="fa fa-angle-right"><i/>',
            openedSymbol: '<i class="fa fa-angle-down"><i/>',
            brand: '<img src="' + logo_path + '" class="img-fluid" alt="logo">'
        });



        /*====================================
                Testimonial slider
            ======================================*/

        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: '.slider-nav'
          });
          $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: true,
            centerMode: true,
            variableWidth: true,
            infinite: true,
            focusOnSelect: true,
            cssEase: 'linear',
            touchMove: true,
            responsive: [{
                breakpoint: 600,
                settings: {
                    arrows: true,
                    slidesToShow: 2
                }
            }, {
                breakpoint: 400,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }
            }]
          });

        /*====================================
            counter
        ======================================*/
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });


       
/*------------ Wow-js -------------*/

new WOW().init();

           /*====================================
            bottom to top
        ======================================*/  

             var btn = $('#btn-to-top');
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });


    })(jQuery);
    /*------------------ Google-Map --------------------*/
    var iconmap = document.querySelectorAll('#map');
    var img_src = $("#map").attr('data-icon');
    var google;
    for (var i in iconmap)
        if (iconmap.hasOwnProperty(i)) {
            function initMap() {
                var map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 10,
                    center: {
                        lat: 40.7819502,
                        lng: -74.7357194
                    }
                });
                var map_icon = img_src;
                var marker = new google.maps.Marker({
                    position: map.getCenter(),
                    icon: map_icon,
                    map: map
                });
            }
        }