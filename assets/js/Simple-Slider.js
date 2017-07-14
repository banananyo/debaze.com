$(function(){

    // Initializing the swiper plugin for the slider.
    // Read more here: http://idangero.us/swiper/api/

    var mySwiper = new Swiper ('.swiper-container', {
        speed: 400,
        spaceBetween: 100,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        effect:'fade'
    });

});