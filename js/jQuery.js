
       function load()
        {
        	var num=Math.floor(Math.random()*4)+1;
        	/*document.getElementById("img").src="pic/0.jpg";*/
        	document.getElementById("A").setAttribute("background","pic/"+num+".jpg")
        	document.getElementById("A").style.backgroundSize="contain";
        	setTimeout("change()",3000);
        }
        function change()
        {
        	if(n>4)
        	{
        		n=0;
        	}
        	/*document.getElementById("A").style.backgroundImage="url(pic/"+Math.floor(Math.random()*4+1+".jpg)";
        	document.getElementById("A").style.backgroundSize="contain";*/
        	var num=Math.floor(Math.random()*4)+1;
        	document.getElementById("A").setAttribute("background","pic/"+num+".jpg")
        	/*document.getElementById("img").setAttribute("src","pic/"+Math.floor(Math.random()*4)+1+".jpg");*/
        		n++;
        		setTimeout("change()",3000);
        }
        function  JumpToweibo()
        {
        	var system ={};  
   			var p = navigator.platform;       
    		system.win = p.indexOf("Win") == 0;  
  	        system.mac = p.indexOf("Mac") == 0;  
  		    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);     
   		    if(system.win||system.mac||system.xll)
			{//pc 
     		  window.location.href="http://www.weibo.com/u/3865190713/";  
   			 }else
			{//moble
     		  window.location.href="http://m.weibo.cn/u/3865190713/";  
   			 }
       }
        function videoone()
        {
        	document.getElementById("video").autoplay="autoplay"
        	document.getElementById("video").src="http://gslb.miaopai.com/stream/VficKv5kY7oke~-Ix9kPnQ__.mp4?vend=miaopai&VficKv5kY7oke~-Ix9kPnQ__.mp4"
        }
        function videotow()
        {
        	document.getElementById("video").autoplay="autoplay"
        	document.getElementById("video").src="http://gslb.miaopai.com/stream/vlxccaJRtZJfvWidASnzlg__.mp4?vend=miaopai&vlxccaJRtZJfvWidASnzlg__.mp4"
        }
         function videothree()
        {
        	document.getElementById("video").autoplay="autoplay"
        	document.getElementById("video").src="http://gslb.miaopai.com/stream/4Fo~3JLM1uhyH7Yqz4huAQ__.mp4"
        }
         function videofour()
        {
        	document.getElementById("video").autoplay="autoplay"
        	document.getElementById("video").src="http://gslb.miaopai.com/stream/NNOTi8M3YQn-K75aNF2WdQ__.mp4"
        }
         function videofive()
        {
        	document.getElementById("video").autoplay="autoplay"
        	document.getElementById("video").src=""
        }
         function videosix()
        {
        	document.getElementById("video").autoplay="autoplay"
        	document.getElementById("video").src=""
        }
         function videoseven()
        {
        	document.getElementById("video").autoplay="autoplay"
        	document.getElementById("video").src=""
        }
         function videoeight()
        {
        	document.getElementById("video").autoplay="autoplay"
        	document.getElementById("video").src=""
        }
         function videonine()
        {
        	document.getElementById("video").autoplay="autoplay"
        	document.getElementById("video").src=""
        }
         function videoten()
        {
        	document.getElementById("video").autoplay="autoplay"
        	document.getElementById("video").src=""
        }
         function videoeleven()
        {
        	document.getElementById("video").autoplay="autoplay"
        	document.getElementById("video").src=""
        }
         function videotwelve()
        {
        	document.getElementById("video").autoplay="autoplay"
        	document.getElementById("video").src=""
        }
        function videothirteen()
        {
        	document.getElementById("video").autoplay="autoplay"
        	document.getElementById("video").src=""
        }
        function videofourteen()
        {
        	document.getElementById("video").autoplay="autoplay"
        	document.getElementById("video").src=""
        }
