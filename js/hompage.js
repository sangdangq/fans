$(document).ready(() => {
    $('.nav-item > .fas.fa-search').click(function (e) {
        e.preventDefault();
        $(this).hide();
        $('.search').show();
    });

    $('.search .fas.fa-search').click(function (e) {
        $('.search').hide();
        $('.nav-item > .fas.fa-search').show();
    });

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
})