$('.pagescroll').on('click', function (j) {

    var link = $(this).attr('href');

    var element = $(link);



    // $('pagescroll').scrollTop(700);

    $('html, body').animate({
        scrollTop: element.offset().top - 58
    }, 900, 'swing');

    j.preventDefault();

});