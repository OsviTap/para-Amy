$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });

    // Nueva funcionalidad para mostrar la carta como modal
    $('.card').click(function () {
        $(this).stop().animate({
            top: '-100%'
        }, 'slow', function() {
            // Mostrar modal aquí
            $('#myModal').modal('show');
        });
    });
});