$(document).ready(function() {
    
	

    // initScripts
    function init() {
        scrollFade();
        slider();
    }

    init();


    // scripts
    function scrollFade() {
        $(window).fadeThis({
            speed: 600,
            distance: 400,
            reverse: false
        });
    }

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
            breakpoints: {
                767: {
                    slidesPerView: 1
                }
            }
        });   
    }
         
});