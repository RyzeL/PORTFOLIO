<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <link rel="stylesheet" href="">

<script type="text/javascript" src="http://code.jquery.com/jquery-3.1.1.min.js"></script>

    <script type="text/javascript">
    $(document).ready(function(){

    var name = "POSITION_FLAG=001&WEEK_FLAG=WEK";
        $.ajax({
                 url : "http://52.78.113.18:9080/node",
                 type : "post",
                 data : name,
                 dataType : "json",
                 success : function(data) {
                    //alert("success");
                    document.getElementById("result").innerHTML = data+"님 반갑습니다.";
                    console.log(data.SCHEDULE[0].ST_FIV);
                    console.log(typeof(data));
                    console.log(eval(data));
                    console.log("test")
                    console.log(JSON.stringify(data));
                    console.log(JSON.parse(data));

                 },

                 error : function(request) {
                     //alert("실패");
                 }
                 });

        });
</script>
</head>
<body>

    <div id="result">

    </div>
             <p>Welcom to my aws"jsp"</p>
                <h1>My name is heesun</h1>
                <h5>here is your Homepage that modify jsp, add jsp , and etc...</h5>
                <h5>other questions ,  please contant heesun </h5>
                bye ~~~~~~~~~~~~aa
</body>
</html>
