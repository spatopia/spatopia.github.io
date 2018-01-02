'use strict';

$(function () {
    var $slide = $('.review-slideout');
    var deltaX = 0;

    $('.js-spa-location').on('click touchstart', function (event) {
        $slide.addClass('is-showing');
        $slide.css({
            transform: 'translateX(0)',
            transition: '0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)'
        });
        return false;
    });

    var hammer = new Hammer($slide.get(0));
    hammer.on('panleft', function (event) {
        $slide.css('transform', 'translateX(' + event.deltaX + 'px)');
        $slide.css({
            transform: 'translateX(' + event.deltaX + 'px)',
            transition: '0.2s easeInQuint'
        });
        deltaX = event.deltaX;
    });

    hammer.on('panright', function (event) {
        if (deltaX <= 0) {
            deltaX = Math.min(0, event.deltaX);
            $slide.css({
                transform: 'translateX(' + deltaX + 'px)',
                transition: '0.2s easeInQuint'
            });
        }
    });

    hammer.on('panend', function (event) {
        if (-deltaX > $(document).width() / 2) {
            $slide.css({
                transform: 'translateX(-105%)',
                transition: '0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)'
            });
            $slide.removeClass('is-showing');
        } else {
            $slide.css({
                transform: 'translateX(0)',
                transition: '0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)'
            });
            deltaX = 0;
        }
    });

    $(document).on('scroll', function (event) {
        var currentScroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var totalScroll = currentScroll + windowHeight;
        var reviewHeight = $slide.height();
        var reviewBottom = reviewHeight - windowHeight;

        if (currentScroll > reviewBottom && $slide.hasClass('is-showing')) {
            $(document).scrollTop(reviewBottom);
        }
    });
});