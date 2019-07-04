//Scripts

$(".spincrement").spincrement({
    decimalPoint: ".",
    thousandSeparator: "",
    duration: 1500
});


$(function(){

    var ts = new Date(2019, 0, 1);

    if((new Date()) > ts){
        ts = (new Date()).getTime() + 10*24*60*60*1000;
    }

    $('#countdown').countdown({
        timestamp	: ts
    });

});




//Carousel responsive
$(function () {

    var jcarousel = $('.jcarousel');

    jcarousel
        .on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();

            if (width >= 576) {
                width = width / 3;
            } else if (width >= 288) {
                width = width;
            }

            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })
        .jcarousel({
            wrap: 'circular',
            animation: {
                duration: 0,
                speed: 1500,
                easing: 'linear',
                complete: function (event, carousel) {
                    $(carousel._element.context).find('li').show().fadeOut(1000);
                }
            }
        })
        .jcarouselAutoscroll({
            interval: 8000,
            target: '+=1',
            autostart: true,
        });

    jcarousel.on('jcarousel:animate', function (event, carousel) {
        $(carousel._element.context).find('li').hide().fadeIn(2000);
    });


});
