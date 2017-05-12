$(document).ready(function() {

    // initScripts
    function init() {
        slider();
    }

    init();


    // scripts
    function slider() {
        var $this = $('.js-slider');
        var slider = new Swiper($this, {
            loop: true,
            speed: 700,
            simulateTouch: false,
            nextButton: $this.find('.swiper-button-next')[0],
            prevButton: $this.find('.swiper-button-prev')[0],
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
            autoHeight: true,
            loopAdditionalSlides: 1,
            //initialSlide: 3,
            breakpoints: {
                767: {
                    slidesPerView: 1
                }
            }
        });   
    }
         
});