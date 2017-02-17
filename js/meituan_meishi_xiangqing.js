/*评价隐藏部分和显示全部*/
			$(document).ready(function(){
				var clickDown=false;
				var clickDown1=false;
				$("#CE").click(function(){
					if(clickDown==false){
						$(this).css("-webkit-line-clamp","100");
						$("#CE1").html("<");
						 clickDown=true;
					}else if(clickDown==true){
						$(this).css("-webkit-line-clamp","2");
						$("#CE1").html(">");
						clickDown=false;
					}
				});
				var clickDown1=false;
				$("#DE").click(function(){
					if(clickDown1==false){
						$(this).css("-webkit-line-clamp","100");
						$("#DE1").html("<");
						 clickDown1=true;
					}else if(clickDown1==true){
						$(this).css("-webkit-line-clamp","2");
						$("#DE1").html(">");
						clickDown1=false;
					}
				});
			});