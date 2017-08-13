// 상단 튐 방지
$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});

/* ---------------------- header : 메뉴 설정 ---------------------- */
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


/* ---------------------- 서브 구현 ---------------------- */


/* ---------------------- top버튼 구현 ---------------------- */

$(function () {

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
