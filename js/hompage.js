$(document).ready(() => {
    $('.nav-item__icon.search').click(function (e) {
        e.preventDefault();
        const searchBar = $('.search-bar');
        if(searchBar.hasClass('open')) {
            searchBar.removeClass('open');
        } else {
            searchBar.addClass('open');
        }
    });

    $('.search-bar .input-group-text').click(function (e) {
        $('.search-bar').removeClass('open');
        $.post("ajax/test", function( data ) {
            $( ".result" ).html( data );
        });
        $('.nav-item__icon.search').show();
    });
})