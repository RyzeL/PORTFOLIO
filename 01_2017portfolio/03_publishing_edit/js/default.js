/********************************************
|-------------------START-------------------|          
|Producer : JinSeul Choi 
|FirstFoundationDate : 2017.08.09
|RsentUpDate : 2017.08.29
|Index : 
1::: a태그 클릭시 상단 튐 방지 2::: HeaderSetting 
3::: 레이어팝업 구현 3-1::: 정가운데 구현 
4::: Top 버튼 구현 5::: Footer 구현
********************************************/
/* ---------------------- 1::: a태그 클릭시 상단 튐 방지 ---------------------- */
$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});

$(document).ready(function(){
    /* ---------------------- 2::: HeaderSetting ---------------------- */
    /*var banner = new Headhesive('#header', options);
    var options = {
        offset: '#showHere',
        offsetSide: 'top',
        classes: {
            clone:   'banner--clone',
            stick:   'banner--stick',
            unstick: 'banner--unstick'
        }
    };*/

    /* ---------------------- 3::: 레이어팝업 구현 ---------------------- */
    /* ---------- 3-1::: 정가운데 구현 ---------- */
    //변수 선언
    var popWrap = $('.pop-layer'),
           popWrapWidth = Math.floor(popWrap.outerWidth()),
           popWrapHeight = Math.floor(popWrap.outerHeight()),
           docWidth = $(document).width(),
           docHeight = $(document).height();

   //조건 성립
   if( popWrapWidth < docWidth && popWrapHeight < docHeight ) {
        popWrap.css ({
            marginTop : -popWrapHeight/2,
            marginLeft : -popWrapWidth/2
        });
   } else {
        popWrap.css ({
            marginTop : 0,
            marginLeft : 0
        });
   }
    /* ---------- 3-2::: 클릭시 구현 ---------- */   
    $('.btn-example').on('click' , function(){
        var btnExample = $('.btn-example').index(this),
              layerPopup = document.getElementsByClassName('pop-layer');
        //클릭시 레이어팝업 구현하는 함수
        popupOpen(btnExample , layerPopup);
    });
    
    function popupOpen(argu1, argu2){
        $(argu2).each(function(index,value){
            if(index === argu1){
                $(this).css({
                    display : 'block'
                });
                $('.bg').css({
                    display : 'block'
                });
                $('#wrap').css({
                    height : popWrapHeight,
                    overflowY : 'hidden'
                });
            } 
        });
    }
    //닫기버튼 구현
    $('.cbtn').on('click' , function(){
        $('.pop-layer').css({
            display : 'none'
        });
        $('.bg').css({
            display : 'none'
        });
        $('#wrap').css({
            height : 'auto',
            overflowY : 'auto'
        });
    });

/* ---------------------- 4::: Top 버튼 구현 ---------------------- */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { //스크롤다운
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });
    // top 클릭시 구현
    $('.top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800); 
        return false;
    });
/* ---------------------- 5::: Footer 구현 ---------------------- */
    $('#footer').html('<div class="inner"><h2 class="blind">저작권자 정보</h2><div class="f_info_box"><p class="copyright">© 2017 Jinseul Choi</p></div></div>');

});
