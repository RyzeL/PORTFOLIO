/********************************************
|-------------------START-------------------|          
|Producer : JinSeul Choi 
|FirstFoundationDate : 2017.01.09
|RsentUpDate : 2017.10.25
|Index : 
1::: show to prevent to move top when click a tag
2::: show to TOPbutton
3::: show to slide for workSub page(bxSlider option)
********************************************/
/* ---------------------- 1::: show to prevent to move top when click a tag  ---------------------- */
$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});


$(document).ready(function(){

/* ---------------------- 2::: show to TOPbutton ---------------------- */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { // show to down the scroll
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });

    $('.top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);  // top moving scroll speed
        return false;
    });
    
    /* ---------------------- 3::: show slide for workSub page(bxSlider option) ---------------------- */
    $('.workSubImgBox').bxSlider({
        auto : true, // autoPlay setting Boolean
        mode : 'fade', // sildeMode setting Option : horizontal', 'vertical', 'fade'
        pause : '4000', // pauseTime setting number ex) 1000 == 1s, 500 == 0.5s
        infiniteLoop : true, // infinitePlay setting Boolean 
        autoControls : false, // setting Boolean. If true, "Start" / "Stop" controls will be added
        keyboardEnabled : true, // setting Boolean. Enable keyboard navigation for visible sliders
        captions: true,  //Include image captions. Captions are derived from the image's title attribute
        responsive : true, //Enable or disable auto resize of the slider. Useful if you need to use fixed width sliders.
        adaptiveHeight: true
      });
});

/********************************************
|-------------------END-------------------|          
|Producer : JinSeul Choi 
|FirstFoundationDate : 2017.01.09
|RsentUpDate : 2017.10.25
********************************************/