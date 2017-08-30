/* ---------------------- ContentsSetting ---------------------- */

$(function(){
    
    /* Project_ layerPopup */
    
    /* swiper_setting */
    // 상단 튐 방지
        $(document).on('click', 'a[href="#"]', function(e) {
            e.preventDefault();
        });

        // 메인 비주얼
        imageSlide('#main_visual');

        function imageSlide(selector) {
            // 셀렉터 확인
            if ($(selector).length !== 1) {
                alert('해당 셀렉터에 해당하는 요소가 없거나 여러 개 존재합니다. 셀렉터를 다시 확인해 주세요.');
                return false;
            }

            // 변수(환경) 설정
            var numSlide = $(selector).find('ul.slide li').length; //console.log(numSlide);
            var slideWidth = $(selector).innerWidth(); //console.log(slideWidth);
            var slideStart = 1;
            var slideNow = 0;
            var slidePrev = 0;
            var slideNext = 0;
            var slideNextAuto = 0;
            var startX = 0;
            var startY = 0;
            var delX = 0;
            var delY = 0;
            var intervalId = null;
            var intervalTime = 3000;
            var timerStatus = 'play';   // 'play' 플래이 상태, 'pause' 인 경우에는 정지
            var direction = '';
            var limitWidth = 50;
            var isMousemove = false;    // true 이면 mousemove된 상태로 클릭 이벤트 무시(웹에서 클릭이벤트 방지)

            // 1개이면 동작하지 않음
            if (numSlide < 2) {
                $(selector).find('p.control').css({'display': 'none'});
                return false;
            }

            // 슬라이드 초기상태 설정
            $(selector).find('ul.slide li').each(function(i) {
                $(this).css({'left': (i * 100) + '%', 'display': 'block'});
                $(selector).find('ul.indicator').append('<li><a href="#">' + (i + 1) + '번 슬라이드</a></li>');
            });

            // 타이머 초기상태 설정
            if (timerStatus === 'play') {
                //console.log('play');
                intervalId = setInterval(function() {showSlide(slideNextAuto);}, intervalTime);
                timerStatus = 'play';
            } else {
                $(selector).find('p.control a.play img').attr({'src': 'images/btn_stop_mainVis.png'});
                timerStatus = 'pause';
            }

            // 최초 이미지 표시
            showSlide(slideStart);

            // 이벤트(타이머)
            $(selector).find('p.control a.play').on('click', function() {
                if (timerStatus === 'play') {
                    $(selector).find('p.control a.play img').attr({'src': 'images/btn_play_mainVis.png'});
                    clearInterval(intervalId);
                    timerStatus = 'pause';
                } else {
                    //console.log('play')
                    $(selector).find('p.control a.play img').attr({'src': 'images/btn_stop_mainVis.png'});
                    intervalId = setInterval(function() {showSlide(slideNextAuto);}, intervalTime);
                    timerStatus = 'play';
                }
            });


            // 이벤트 (직접이동)
            $(selector).find('ul.indicator li a').on('click', function() {
                var index = $(selector).find('ul.indicator li').index($(this).parent());
                showSlide(index + 1);
            });

            // 이벤트 (이전/다음)
            $(selector).find('p.control a.prev').on('click', function() {
                showSlide(slidePrev);
            });
            $(selector).find('p.control a.next').on('click', function() {
                showSlide(slideNext);
            });

            // 이벤트 (드래그/Swipe)  PC인 경우
            $(selector).find('ul.slide').on('mousedown', function(e) {
                clearInterval(intervalId);  // 타이머 종료
                $(selector).find('ul.slide').css({'transition': 'none'});
                e.preventDefault();  // firefox(웹)에서는 여기서에 e.preventDefault 해야 기본동작 방지(이미지 드래그)
                startX = e.clientX;
                $(document).on('mousemove', function(e) {
                    delX = e.clientX - startX;
                    var offsetX = -($(selector).innerWidth() * (slideNow - 1));
                    // 끝 부분에 해당하면 이동량 줄임
                    if ((offsetX + delX) > 0 || (offsetX + delX) < -(numSlide - 1) * $(selector).innerWidth()) {
                        delX = delX / 5;
                    }
                    $(selector).find('ul.slide').css({'-webkit-transform': 'translateX(' + (offsetX + delX) + 'px)', 'transform': 'translateX(' + (offsetX + delX) + 'px)'});

                    // 링크 동작 방지(mousemove 후)
                    isMousemove = true;
                });
                $(document).on('mouseup', function() {
                    if (isMousemove === true) {
                        $(selector).find('ul.slide li a').on('click', function(e) {e.preventDefault();});
                    }
                    if (delX < -limitWidth) { 
                        showSlide(slideNext);
                    } else if (limitWidth < delX) {
                        showSlide(slidePrev);
                    } else {
                        showSlide(slideNow);  // 원래 값으로 돌아감
                    }
                    delX = 0;   // 초기화 하지 않는 경우 click시 mousedown -> mouseup 으로 바로 넘어오면서 기존의 del 값으로 판단
                    $(document).off('mousemove mouseup');
                });
            });

            // 이벤트 (드래그/Swipe)  Mobile인 경우
            $(selector).find('ul.slide').on('touchstart', function(e) {
                clearInterval(intervalId);  // 타이머 종료
                $(selector).find('ul.slide').css({'transition': 'none'});
                startX = e.originalEvent.touches[0].clientX;
                startY = e.originalEvent.touches[0].clientY;
                // tochmove의 경우 passive:false로 설정해야 e.preventDefault 정상동작(경고 미표시) --> jQuery는 해당 기능이 없어 JavaScript 이용
                document.addEventListener('touchmove', touchmoveHandler, {passive: false});
                function touchmoveHandler(e) {
                    delX = e.touches[0].clientX - startX;   // 순수 자바스크립트 이벤트로 originalEvent 필요없음
                    delY = e.touches[0].clientY - startY;
                    // 이동방향 결정
                    if (direction === '') {  // 방향결정 전이면
                        if (Math.abs(delX) > 5) {
                            direction = 'horizon';
                        } else if (Math.abs(delY) > 5) {
                            direction = 'vertical';
                        }
                    }
                    if (direction === 'horizon') {
                        e.preventDefault();
                        var offsetX = -($(selector).innerWidth() * (slideNow - 1));
                        // 끝 부분에 해당하면 이동량 줄임
                        if ((offsetX + delX) > 0 || (offsetX + delX) < -(numSlide - 1) * $(selector).innerWidth()) {
                            delX = delX / 5;
                        }
                        $(selector).find('ul.slide').css({'-webkit-transform': 'translateX(' + (offsetX + delX) + 'px)', 'transform': 'translateX(' + (offsetX + delX) + 'px)'});
                    }
                }

                $(document).on('touchend', function() {
                    if (delX < -limitWidth) { 
                        showSlide(slideNext);
                    } else if (limitWidth < delX) {
                        showSlide(slidePrev);
                    } else {
                        showSlide(slideNow);  // 원래 값으로 돌아감
                    }
                    delX = 0;   // 초기화 하지 않는 경우 click시 touchstart -> touchend로 바로 넘어오면서 기존의 del 값으로 판단
                    delY = 0;
                    direction = '';
                    document.removeEventListener('touchmove', touchmoveHandler);   // touchmove는 JavaScript로 이벤트 제거, touchmoveHandler 필수 요소(함수화)
                    $(document).off('touchend');
                });
            });         

            //intervalId = setInterval(function() {showSlide(slideNextAuto);}, intervalTime);

            // 이벤트 : ul.slide transition 종료시 판단 내용 (showSlide(n)에 포함시 이벤트 계속 추가)
            $(selector).find('ul.slide').on('transitionend', function() {  // show
                //console.log("here")
                if (timerStatus === 'play') {  // 타이머 재동작 여부(play 상태이면 재동작)
                    intervalId = setInterval(function() {showSlide(slideNextAuto);}, intervalTime);
                }
                // mousemove 판단값 원위치, 링크동작 preventDefault 제거
                isMousemove = false;
                $(selector).find('ul.slide li a').off('click');
            });

            // n번 이미지 표시
            function showSlide(n) {
                //console.log(timerStatus);
                clearInterval(intervalId);
                //timerStatus = 'pause'; (변경 X : 원래상태에 의거해서 transitionend시 재판단)
                var offsetX = -(n - 1) * 100;  // 시작위치 설정 (%)
                
               $(selector).find('ul.slide').css({'-webkit-transition': 'transform 0.01s', '-webkit-transform': 'translateX(' + offsetX + '%)', 'transition': 'transform 0.01s', 'transform': 'translateX(' + offsetX + '%)'}); // webkit 동시 작성 (일부 모바일 기기에서 미지원)

                $(selector).find('ul.slide li').stop(true).animate({'opacity': 0}, 500, function() {
                    $(this).css({'display': 'none'});                    
                });
                $(selector).find('ul.slide li:eq(' + (n-1) + ')').stop(true).css({'display': 'block'}).animate({'opacity': 1}, 500);

                $(selector).find('ul.indicator li').removeClass('on');
                $(selector).find('ul.indicator li:eq(' + (n - 1) + ')').addClass('on');
                slideNow = n;               
                slidePrev = (n - 1) < 1 ? numSlide : n - 1;
                slideNext = (n + 1) > numSlide ? 1 : n + 1;
                slideNextAuto = (n + 1) > numSlide ? 1 : n + 1;
            }
        }
    
    
    /* 1_newGaonnit */
    $('.layer').hide();
    
    $('.btn-example1').on('click' , function(){
        $('.layer1').show();
    });
    
    $('.cbtn').on('click' , function(){
        $('.layer1').hide();
    });
    
    $('.layer1 .bg').on('click' , function(){	
        $('.layer1').hide();
        e.preventDefault();
    });
    

});	
