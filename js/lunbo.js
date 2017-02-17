$(document).ready(function() {
		var firstX=0;
		var lastX=0;
		var x=0
		
		$("#two").bind("touchstart",function(){
			//比如说一开始出发时时100px
			firstX = event.touches[0].pageX;
		});
		
		$("#two").bind("touchmove",function(){
			//滑动倒150px
			
			x = event.touches[0].pageX;
			var result=x-firstX+parseInt(lastX);
			$(this).css({"margin-left":result+"px"});
		});
		
		$("#two").bind("touchend",function(){
			if(firstX-x<0){
				$(this).animate({"margin-left":"0px"},500);
				lastX=0;
			}
			if(firstX-x>0){
				$(this).animate({"margin-left":"-100%"},500);
				lastX=-$(this).css("width").replace("px","")/2;
			}
		});
});