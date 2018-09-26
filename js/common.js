$(function () {
    $('.mob-pred').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
    ]
    });
    $('.big-slider').slick({
        arrows: false,
        autoplay:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed:1000,
        autoplaySpeed: 1200,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
    $('.ic-menu').click(function () {
        $('.in-menu').show();
    });
    $('.ic-hide').click(function () {
        $('.in-menu').hide();
    });
});