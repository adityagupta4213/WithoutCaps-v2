$(document).ready(function() {
    $(this).scrollTop(0);
});

var is_menu_open = false;

$('.menu > .icon').on('click', function() {
    if (!(is_menu_open)) {
        $('.menu').css({'background': 'white','color': '#111010'});
        $('.expanded-menu').css('display', 'block');
        is_menu_open = true;
    } else {
        $('.menu').css({
            'background': '#111010',
            'color': 'white'
        });
        $('.expanded-menu').css('display', 'none');
        is_menu_open = false;
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $('.menu').css('display', 'none');
        $('.expanded-menu').fadeIn(200);
        $('.expanded-menu').css('box-shadow', '0 0 5px gray');
    } else {
        $('.expanded-menu').css('display', 'none');
        $('.expanded-menu').css('box-shadow', 'none');
        $('.menu').css('display', 'block');
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