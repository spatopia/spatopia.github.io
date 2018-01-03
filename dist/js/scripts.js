'use strict';

$(function () {
    var $slide = $('.review-slideout');
    var $review = $('.js-spa-review');
    var deltaX = 0;

    $('.js-spa-location').on('click touch', function (event) {
        // const spaId = $(event.target).parents('.js-spa-location').data('id');
        // $(`.js-spa-review[data-id=${spaId}]`).removeClass('is-hidden');
        $('.js-spa-review[data-id=1]').removeClass('is-hidden');
        $('body').css('overflow', 'hidden');
        $slide.addClass('is-showing');
        $slide.css({
            transform: 'translateX(0)',
            transition: '0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)'
        });
        return false;
    });

    // const hammer = new Hammer($slide.get(0));
    // hammer.on('panleft', event => {
    //     $slide.css('transform', `translateX(${event.deltaX}px)`);
    //     $slide.css({
    //         transform: `translateX(${event.deltaX}px)`,
    //         transition: '0.2s easeInQuint'
    //     });
    //     deltaX = event.deltaX;
    // });

    // hammer.on('panright', event => {
    //     if (deltaX <= 0) {
    //         deltaX = Math.min(0, event.deltaX);
    //         $slide.css({
    //             transform: `translateX(${deltaX}px)`,
    //             transition: '0s easeInQuint'
    //         });
    //     }
    // });

    // hammer.on('panend', event => {
    //     if (-deltaX > $(document).width() / 2) {
    //         $slide.css({
    //             transform: `translateX(-105%)`,
    //             transition: '0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)'
    //         });
    //         $slide.removeClass('is-showing');
    //         setTimeout(() => {
    //             $review.addClass('is-hidden');
    //         }, 500);
    //         $('body').css('overflow', 'auto');
    //     }
    //     else {
    //         $slide.css({
    //             transform: `translateX(0)`,
    //             transition: '0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)'
    //         });
    //         deltaX = 0;
    //     }
    // });

    $('.js-spa-review__back').on('click touch', function (event) {
        $slide.css({
            transform: 'translateX(-105%)',
            transition: '0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)'
        });
        $slide.removeClass('is-showing');
        setTimeout(function () {
            $review.addClass('is-hidden');
        }, 500);
        $('body').css('overflow', 'auto');
    });

    // $(document).on('scroll', event => {
    //     const currentScroll = $(window).scrollTop();
    //     const windowHeight = $(window).height();
    //     const totalScroll = currentScroll + windowHeight;
    //     const reviewHeight = $slide.height();
    //     const reviewBottom = reviewHeight - windowHeight;

    //     if (currentScroll > reviewBottom && $slide.hasClass('is-showing')) {
    //         $(document).scrollTop(reviewBottom);
    //     }
    // });
});