$('.pagescroll').on('click', function (j) {

    var link = $(this).attr('href');

    var element = $(link);



    // $('pagescroll').scrollTop(700);

    $('html, body').animate({
        scrollTop: element.offset().top - 58
    }, 900, 'swing');

    j.preventDefault();

});

// paralax
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px,' + wScroll / 4 + '%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px,' + wScroll / 2 + '%)'
    });
    $('.jumbotron p').css({
        'transform': 'translate(0px,' + wScroll / 1 + '%)'
    });


});