/********************************************
|-------------------START-------------------|          
|Producer : JinSeul Choi 
|FirstFoundationDate : 2017.01.09
|RsentUpDate : 2017.10.25
|Index : 
|1::: Prevent top-click when a tag is clicked
|2::: Top button implementation
********************************************/
/* ---------------------- 1::: Prevent top-click when a tag is clicked ---------------------- */
$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});

/* ---------------------- 2::: Top button implementation ---------------------- */
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { // 스크롤 내릴 표시
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });

    $('.top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);  // 탑 이동 스크롤 속도
        return false;
    });
});
