
(function ($) {
    
    "use strict";

    /*:::::::::::::::::::::::::::::::::::
            Navbar Area
    :::::::::::::::::::::::::::::::::::*/

    // Navbar Sticky
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 190) {
            $("#navbar").addClass("nav-fixed-top");
        } else {
            $("#navbar").removeClass("nav-fixed-top");
        }

        if (scroll >= 200) {
            $("#navbar").addClass("nav-fixed");
        } else {
            $("#navbar").removeClass("nav-fixed");
        }
    });

    //Smoth Scroll
    $(function () {
        $('.nav-link').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
        });
    });

    // smooth-scroll
    $(document).ready(function () {
        $(".nav-item a").on('click', function () {
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000);
        });
    });

    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        // Assign active class to nav links while scolling
        $('.page-section').each(function(i) {
            if ($(this).position().top - 80 <= scrollDistance) {
                    $('nav li.active').removeClass('active');
                    $('nav li').eq(i).addClass('active');
            }
        });
    }).scroll();


    /*==========================
        Hero Title typer
    ============================*/
    var element = $('.typed');

    $(function () {
        element.typed({
            strings: ["front end developer."],
            typeSpeed: 100,
            loop: true,
            autoplay: true,
        });
    });


    /*------------------
        Projects Slider
     --------------------*/
    //  start min Slider 
    $(".ts-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dotsEach: 2,
        dots: false,
        smartSpeed: 1000,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });

    // start background section 
    let mypages = $(".my-pages")

    let singleSlid = $(".ts-slider .gym")
    singleSlid.hover(function () {
        mypages.css("background-image", "url('assets/images/Projects/bg-section/bg-slider-gym.jpg')")
    })

    let singleSlid2 = $(".ts-slider .coffee")
    singleSlid2.hover(function () {
        mypages.css("background-image", "url('assets/images/Projects/bg-section/bg-slider-coffee.jpg')")
    })

    let singleSlid3 = $(".ts-slider .photography")
    singleSlid3.hover(function () {
        mypages.css("background-image", "url('assets/images/Projects/bg-section/bg-slider-photography.jpg')")
    })

    let singleSlid4 = $(".ts-slider .zara")
    singleSlid4.hover(function () {
        mypages.css("background-image", "url('assets/images/Projects/bg-section/bg-slider-zara.jpg')")
    })

    /*::::::::::::::::::::::::::::::::::::
       Testimonial Section
    ::::::::::::::::::::::::::::::::::::*/

    $('.testimonials').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false
    });



    /*::::::::::::::::::::::::::::::::::::
       Services Section
    ::::::::::::::::::::::::::::::::::::*/

    // var widthAll = $(".width-all").height()
    // $(".single-service h2").height(widthAll)
    /*::::::::::::::::::::::::::::::::::::
       Testimonial Section
    ::::::::::::::::::::::::::::::::::::*/

    $('.testimonials').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false
    });


    /*::::::::::::::::::::::::::::::::::::
       Contact Area 
    ::::::::::::::::::::::::::::::::::::*/
    var form = $('#contact-form');

    var formMessages = $('.form-message');
    $(form).submit(function (e) {
        e.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
            .done(function (response) {
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
                $(formMessages).text(response);

                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function (data) {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });


    /*::::::::::::::::::::::::::::::::::::
    Preloader
    ::::::::::::::::::::::::::::::::::::*/
    $(window).on('load', function () {
        $('.preloader').fadeOut();
    });

}(jQuery));

AOS.init({
    offset: 100,
});

