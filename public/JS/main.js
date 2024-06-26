$(document).ready(function() {

    // Nav Slide Toggle
    $('i.icon').click(function() {
        $('.nav-list').slideToggle();
    });

    // Sticky NavBar
    $(window).scroll(function() {
        var sc = $(this).scrollTop();
        if (sc > 50) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });

    // Dropdown for Search Bar
    var input = $('.search-bar input');
    var dropdown = $('.dropdown-content');

    input.on('focus', function() {
        $(this).next('.dropdown-content').show();
    });

    input.on('blur', function() {
        var currentDropdown = $(this).next('.dropdown-content');
        setTimeout(function() {
            currentDropdown.hide();
        }, 100);
    });
});
