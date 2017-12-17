<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=2.0,user-scalable=yes">
<title></title>
<script>
    var ajax_test;

 

    function getHttpRequest(){
        var tt = document.forms[0].ttt.value;

 

        // 비동기 요청/응답에 사용할 객체 생성
       ajax_test = new ActiveXObject("Microsoft.XMLHTTP");  


       // 콜백함수 연결
       // 요청 객체의 readyState값이 변경될 때마다 콜백함수 호출
       ajax_test.onreadystatechange = ajax_test_rev;    


       // 요청에 대한 초기화 작업
       // 매개변수:1. 전송방식, 2. 요청할 파일(URL), 3.동기(false)/비동기(true)여부
       ajax_test.open("GET", "test.asp?ttt=" + tt, true);   


       // 요청 개시
       // 비동기 방식이라면 바로 요청하고, 동기식이면 서버 응답이 있을 때까지 대기한 후 요청함
       ajax_test.send();
   }

 

   // 상태변경시마다 호출될 콜백함수
   function ajax_test_rev(){
        if(ajax_test.readyState == 4){  // 객체의 상태(0:비초기화, 1:로딩, 3:상호작용, 4: 완료)
        if(ajax_test.status == 200){ // http 상태(200:확인, 404:파일못찾음, 202:값없음)
        if(typeof(document.all["dd"]) == "object"){
                    // 응답된 텍스트를 원하는 레이어에 출력
                    // responseText에 응답된 내용이 저장되어 있음
                   document.getElementById("dd").innerHTML = ajax_test.responseText;
             }
        }
    }
 }


    var dragflag = false;
    var dragobj,dragfrm,x,y,sleft,sright;

   

   function move(e){
       if(dragflag){
             dragobj.style.left = sleft + event.clientX - x;
             dragobj.style.top = sright + event.clientY - y;
       }
       return false;
  }

 

  function drags(obj, e){
       dragobj = eval("document.all."+obj);
       

       dragflag = true;
       sleft  = parseInt(dragobj.style.left + 0);
       sright = parseInt(dragobj.style.top + 0);
       x = event.clientX;
       y = event.clientY;
  

       document.onmousemove = move;
       return false;
   }

  

   document.onmouseup = new Function("dragflag = false;");
</script>

</head>


<body>

<form name="frm_dd">
        <input type="text" name="ttt"><br>
        <!-- 버튼 클릭 시 test.asp페이지 요청을 위해 getHttpRequest() 호출 -->
        <input type="button" onclick="document.all.dd.style.display='';getHttpRequest();" value="비동기 파일응답받기">
        <input type="button" onclick="document.all.dd.style.display='none';" value="감추기">
    </form>

 

    <!-- 요청한 페이지를 표시할 레이어 -->
    <div id="dd" style="position:absolute;display:none;left:100px;top:100px;width:200px;height=200px;"></div>





</body>
</html>