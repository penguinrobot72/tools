$('.js-img-shake').hide();

$('.js-start').on('click', function () {
    var options = $('.js-textarea').val().split('\n');
    var rand = Math.floor(Math.random()*options.length);

    $('.js-img-shake').show();
    $('.js-img-ok').hide();
    $('.js-result').text('...(´-ω-｀)');
    setTimeout(function() {
        $('.js-img-shake').hide();
        $('.js-img-ok').show();
        $('.js-result').text('result：' + options[rand]);
    }, 3000);
});