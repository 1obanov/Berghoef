;
(function ($) {
    "use strict";

    /*--------- Mobile menu ---------*/
    $('#menu-button, #menu-close-button, #main-nav a').on('click', function (e) {
        e.preventDefault();

        $('#menu-button, #main-nav').toggleClass('pushed-left');
    });



    /*--------- Menu Scroller ---------*/
    $('a.scroller').on('click', function () {
        'use strict';
        var the_id = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(the_id).offset().top + 1
        }, 'slow');
        return false;
    });

    /*--------- Add the active class ---------*/
    $(document).ready(function () {
        $('.btn').click(function () {
            $(this).toggleClass('active').siblings().removeClass('active');
        });
    });


    /*--------- Impressions slider ---------*/
    $(document).ready(function () {
        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: false,
            cssEase: 'linear',
            mobileFirst: true,
            prevArrow: "<img src='https://1obanov.github.io/Bergoef/images/bg-prev.png' class='prev' alt='1'>",
            nextArrow: "<img src='https://1obanov.github.io/Bergoef/images/bg-next.png' class='next' alt='2'>",

            responsive: [{

                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }

            }, {

                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false
                }

            }, {

                breakpoint: 200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false
                }
            }]
        });
    });


    /*--------- Contact form ---------*/
    if ($('.js-ajax-form').length) {
        $('.js-ajax-form').each(function () {
            $(this).validate({
                errorClass: 'error wobble-error',
                submitHandler: function (form) {
                    $.ajax({
                        type: "POST",
                        url: "mail.php",
                        data: $(form).serialize(),
                        success: function () {
                            $('.modal').modal('hide');
                            $('#success').modal('show');
                        },

                        error: function () {
                            $('.modal').modal('hide');
                            $('#error').modal('show');
                        }
                    });
                }
            });
        });
    }


    /*--------- Preloader ---------*/
    $(window).on("load", function () {
        "use strict";
        jQuery("#status").fadeOut(350);
        jQuery("#preloader").delay(350).fadeOut(200);
    });

})(jQuery)