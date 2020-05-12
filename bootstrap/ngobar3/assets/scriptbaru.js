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
// about

$(window).on('load', function () {
    $('.pkiri').addClass('pmuncul');
    $('.pkanan').addClass('pmuncul');
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px,' + wScroll / 3 + '%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px,' + wScroll / 2 + '%)'
    });
    $('.jumbotron p').css({
        'transform': 'translate(0px,' + wScroll / 1 + '%)'
    });


});