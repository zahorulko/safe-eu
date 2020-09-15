$(function() {

    var introH = $("#intro").innerHeight();
    var header = $("#header");
    var scrollOffset = $(window).scrollTop();
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        scrollOffset = $(this).scrollTop();
        if(scrollOffset >= introH) {
            header.addClass("fixed");
        }else{
            header.removeClass("fixed");
        }
    };

    /* */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var blockId = $(this).data('scroll');
        var blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $(this).addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);

    });

    /* Nav toggle*/

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    $(".nav_link").on("click", function(event) {
        event.preventDefault();
        $("#nav").removeClass("active");
        $("#nav_toggle").removeClass("active");
    })

});



