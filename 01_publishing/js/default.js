//Top protection
$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});

/* ---------------------- headerSetting ---------------------- */
$(function(){
    
    // Set options
    var options = {
                offset: '#showHere',
                offsetSide: 'top',
                classes: {
                    clone:   'banner--clone',
                    stick:   'banner--stick',
                    unstick: 'banner--unstick'
                }
            };

    // Initialise with options
    var banner = new Headhesive('#header', options);

    // Headhesive destroy
    // banner.destroy();
});


/* ---------------------- ContentsSetting ---------------------- */


/* ---------------------- topButton ---------------------- */

$(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { //Scroll down
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });

    $('.top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);  //Top Moving Scroll Speed
        return false;
    });

});
