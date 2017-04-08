$(document).ready(function() {
    $(this).scrollTop(0);
});

var is_menu_open = false;

$('.menu > .icon').on('click', function() {
    if (!(is_menu_open)) {
        $('.expanded-menu').css('display', 'block');
        is_menu_open = true;
    } else {
        $('.expanded-menu').css('display', 'none');
        is_menu_open = false;
    }
});

/* Smooth scroll */

var $root = $('html, body');
$('a').click(function(e) {
    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});

/* under development 
var keywords = ['SystemMonitor','LessonSchedule','programming','development','windows','android'];
var colors = ['#eee','#444','#ccc','#cdcdcd','#666'];
*/