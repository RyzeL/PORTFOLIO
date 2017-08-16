<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=2.0,user-scalable=yes">
<title></title>
<%
 response.charset = "euc-kr"
%>
</head>


<body>

<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
       <tr height="32">
            <td align="left" onMousedown="drags('dd',event);" bgColor="red">
                  <div id="ddtitle" style="border-style:solid;border-width:1px;width:100%;width:100%;height:100%">
                         <font color="#ffffff"> 이동막대 </font>
     &nbsp;&nbsp;&nbsp;&nbsp;
                         <span id="vv" style="cursor:hand;font-size:9pt" onClick="document.all.ddsub.style.display='';">[최대화]</span>
                         <span id="hh" style="cursor:hand;font-size:9pt" onClick="document.all.ddsub.style.display='none';">[최소화]</span>
                   </div>
               </td>  
           </tr>
           <tr height="168">
               <td>

                    <div id="ddsub" style="border-style:solid;border-width:1px;width:100%;height:100%">

                            <h1><%=request("ttt")%></h1>

                    </div>

              </td>
         </tr>
    </table>

</body>
</html>


