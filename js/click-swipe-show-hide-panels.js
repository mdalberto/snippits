

// cloud 4 tiles arrangement    
function cloud4TileFix() {
    var $tiles = $('.js-advisor-tiles .js-advisor-tile');
    $tiles.leveller({
        cssSelector: '.js-advisor-tile-actions',
        cssProperty: 'margin-top'
    });
    $tiles.leveller();
}


// adding function to make sure images have loaded in the div before running the leveller code
function are_imgs_loaded_then_run_cloud4TileFix(div) {
    var contentImages = $(div);
    var totalImages = contentImages.length;
    var loadedImages = 0;
    contentImages.each(function () {
        $(this).on('load', function () {
            loadedImages++;
            if (loadedImages == totalImages) {
                cloud4TileFix();
                //alert('Get Bio Short - user clicked');
            }
        });
    });
}

are_imgs_loaded_then_run_cloud4TileFix("#js_horoThumbs img");



// tabbed navigation for yesterday • today • tomorrow show/hide panels

var allHoroBtnListElements = $('#js-nav-horo-dates').find('li');
var js_horo_today_panel = $('#js-today');
var js_horo_tomorrow_panel = $('#js-tomorrow');
var js_horo_yesterday_panel = $('#js-yesterday');
var js_horo_year_panel = $('#js-year');
var js_horo_panel = $('.js-slide-panel');

// using touchSwipe.js
$(function () {
    $(js_horo_today_panel).swipe({
        swipeLeft: function () {
            tomorrowShow();
        },
        swipeRight: function () {
            yesterdayShow();
        }
    });
});

$(function () {
    $(js_horo_tomorrow_panel).swipe({
        swipeRight: function () {
            todayShow();
        },
        swipeLeft: function () {
            yearShow();
        }
    });
});

$(function () {
    $(js_horo_yesterday_panel).swipe({
        swipeLeft: function () {
            todayShow();
        }
    });
});

$(function () {
    $(js_horo_year_panel).swipe({
        swipeRight: function () {
            tomorrowShow();
        }
    });
});



$('#js-btn-today a').on('click', function (e) {
    e.preventDefault();
    if ($(js_horo_today_panel).is(':visible')) {
    } else {
        todayShow();
    }
});

$('#js-btn-tomorrow a').on('click', function (e) {
    e.preventDefault();
    if ($(js_horo_tomorrow_panel).is(':visible')) {
    } else {
        tomorrowShow();
    }
});

$('#js-btn-yesterday a').on('click', function (e) {
    e.preventDefault();
    if ($(js_horo_yesterday_panel).is(':visible')) {
    } else {
        yesterdayShow();
    }
});

$('#js-btn-year a').on('click', function (e) {
    e.preventDefault();
    if ($(js_horo_year_panel).is(':visible')) {
    } else {
        yearShow();
    }
});

function todayShow() {
    $(js_horo_panel).hide();
    $(js_horo_today_panel).fadeToggle('100', function () {
        $(allHoroBtnListElements).removeClass('active');
        $('#js-btn-today').addClass('active');
        $('#horo-day-nav-sm option[value="today"]').prop("selected", "selected");

    });
}

function yesterdayShow() {
    $(js_horo_panel).hide();
    $(js_horo_yesterday_panel).fadeToggle('100', function () {
        $(allHoroBtnListElements).removeClass('active');
        $('#js-btn-yesterday').addClass('active');
        $('#horo-day-nav-sm option[value="yesterday"]').prop('selected', true);

    });
}

function tomorrowShow() {
    $(js_horo_panel).hide();
    $(js_horo_tomorrow_panel).fadeToggle('100', function () {
        $(allHoroBtnListElements).removeClass('active');
        $('#js-btn-tomorrow').addClass('active');
        $('#horo-day-nav-sm option[value="tomorrow"]').prop("selected", "selected");

    });
}

function yearShow() {
    $(js_horo_panel).hide();
    $(js_horo_year_panel).fadeToggle('100', function () {
        $(allHoroBtnListElements).removeClass('active');
        $('#js-btn-year').addClass('active');
        $('#horo-day-nav-sm option[value="year"]').prop("selected", "selected");

    });
}

// for option select menu

$(function () {
    $('#horo-day-nav-sm').change(function () {

        if ($(this).val() == "yesterday") {
            yesterdayShow();
        }
        if ($(this).val() == "today") {
            todayShow();
        }
        if($(this).val() == "tomorrow") {
            tomorrowShow();
        }
        if($(this).val() == "year") {
            yearShow();
        }
        
    });
});


//// run functions depending upon what url parameter is present

//$(document).ready(function () {
//    if (window.location.href.indexOf("?yesterday") > -1) {
//        yesterdayShow();
//    }
//    if (window.location.href.indexOf("?today") > -1) {
//        todayShow();
//    }
//    if (window.location.href.indexOf("?tomorrow") > -1) {
//        tomorrowShow();
//    }
//    if (window.location.href.indexOf("?year") > -1) {
//        yearShow();
//    }
//});







