$(document).ready(() => {
    $('.nav-item > .nav-item__search').click(function (e) {
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
        $('.nav-item > .nav-item__search').show();
    });
})