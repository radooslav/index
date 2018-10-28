jQuery(function($) {

    var $nav = $('nav');
    var $win = $(window);
    var $logo = $('.logo');
    var $logoxs = $('.logo-xs');
    var $social = $('.social-lg-i');
    var $togler = $('.navbar-toggler-icon-custom');
    var $navigation = $(".navigation");
    var winH = $win.height();   // Get the window height.

    $win.on("scroll", function () {
        if ($(this).scrollTop() > winH ) {
            $nav.addClass("sticky");
            $logo.css("display","none");
            $logoxs.css("display", "block");
            $navigation.css("color","black");
            $social.css("color","black");
            $togler.css("color","black");
            
        } else {
            $nav.removeClass("sticky");
            $logoxs.css("display", "none");
            $logo.css("display","block");
            $navigation.css("color","white");
            $social.css("color","white");
            $togler.css("color","white");
        }
    }).on("resize", function(){ // If the user resizes the window
       winH = $(this).height(); // you'll need the new height value
    });

});

