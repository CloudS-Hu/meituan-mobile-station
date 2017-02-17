$(document).ready(function(){
				var foodDown=false;
				var cityDown=false;
				var orderDown=false;
				var sortDown=false;
				$("#item-food").click(function(){
					if(foodDown==false){
						$("#food").css("display","initial");
						$("#city").css("display","none");
						$("#order").css("display","none");
						$("#sort").css("display","none");
						$(this).html("美食▲");
						$(this).css("color","rgb(6, 193, 174)");
						$("#item-city,#item-order,#item-sort").css("color","rgb(103, 103, 103)");
						$("#item-city").html("全城▼");
						$("#item-order").html("默认排序▼");
						$("#item-sort").html("筛选▼");
						foodDown=true;
						cityDown=false;
						orderDown=false;
						sortDown=false;
						$("#shade").css("display","initial");
						$("html,body").animate({scrollTop:$("#item").offset().top},0);
					}else if(foodDown==true){
						$("#food").css("display","none");
						$(this).html("美食▼");
						$(this).css("color","rgb(103, 103, 103)");
						foodDown=false;
						$("#shade").css("display","none");
					}
				});
				$("#item-city").click(function(){
					if(cityDown==false){
						$("#food").css("display","none");
						$("#city").css("display","initial");
						$("#order").css("display","none");
						$("#sort").css("display","none");
						$(this).html("全城▲");
						$(this).css("color","rgb(6, 193, 174)");
						$("#item-food,#item-order,#item-sort").css("color","rgb(103, 103, 103)");
						$("#item-food").html("美食▼");
						$("#item-order").html("默认排序▼");
						$("#item-sort").html("筛选▼");
						foodDown=false;
						cityDown=true;
						orderDown=false;
						sortDown=false;
						$("#shade").css("display","initial");
						$("html,body").animate({scrollTop:$("#item").offset().top},0);
					}else if(cityDown==true){
						$("#city").css("display","none");
						$(this).html("全城▼");
						$(this).css("color","rgb(103, 103, 103)");
						cityDown=false;
						$("#shade").css("display","none");
					}
				});
				$("#item-order").click(function(){
					if(orderDown==false){
						$("#food").css("display","none");
						$("#city").css("display","none");
						$("#order").css("display","initial");
						$("#sort").css("display","none");
						$(this).html("默认排序▲");
						$(this).css("color","rgb(6, 193, 174)");
						$("#item-food,#item-city,#item-sort").css("color","rgb(103, 103, 103)");
						$("#item-food").html("美食▼");
						$("#item-city").html("全城▼");
						$("#item-sort").html("筛选▼");
						foodDown=false;
						cityDown=false;
						orderDown=true;
						sortDown=false;
						$("#shade").css("display","initial");
						$("html,body").animate({scrollTop:$("#item").offset().top},0);
					}else if(orderDown==true){
						$("#order").css("display","none");
						$(this).html("默认排序▼");
						$(this).css("color","rgb(103, 103, 103)");
						orderDown=false;
						$("#shade").css("display","none");
					}
				});
				$("#item-sort").click(function(){
					if(sortDown==false){
						$("#food").css("display","none");
						$("#city").css("display","none");
						$("#order").css("display","none");
						$("#sort").css("display","initial");
						$(this).html("筛选▲");
						$(this).css("color","rgb(6, 193, 174)");
						$("#item-food,#item-order,#item-city").css("color","rgb(103, 103, 103)");
						$("#item-food").html("美食▼");
						$("#item-order").html("默认排序▼");
						$("#item-city").html("全城▼");
						foodDown=false;
						cityDown=false;
						orderDown=false;
						sortDown=true;
						$("#shade").css("display","initial");
						$("html,body").animate({scrollTop:$("#item").offset().top},0);
					}else if(sortDown==true){
						$("#sort").css("display","none");
						$(this).html("筛选▼");
						$(this).css("color","rgb(103, 103, 103)");
						sortDown=false;
						$("#shade").css("display","none");
					}
				});
				$("#shade").click(function(){
					$(this).css("display","none");
					$("#food").css("display","none");
					$("#city").css("display","none");
					$("#order").css("display","none");
					$("#sort").css("display","none");
					$("#item-food").html("美食▼");
					$("#item-city").html("全城▼");
					$("#item-sort").html("筛选▼");
					$("#item-order").html("默认排序▼");
					$("#item-food,#item-city,#item-order,#item-sort").css("color","rgb(103, 103, 103)");
				});
			});
			/*筛选代码===温习*/
			$(document).ready(function(){
				function saixuan(){
					for (var i=0;i<8;i++) {
						$("#saixuan span:eq("+i+")").click(function(i){							
							for (var j=0;j<8;j++) {
								$("#saixuan span:eq("+j+")").css({"background-color":"white","color":"rgb(6,194,173)"});
							}
							$(this).css({"background-color":"rgb(6,194,173)","color":"white"});
						});						
					}
				}
				saixuan();
				/*重置*/
				$("#reset").click(function(){
					$("#saixuan span").css({"background-color":"white","color":"rgb(6,194,173)"});
				});
			});
			/*隐藏和显示团购list*/
			$(document).ready(function(){
				$("[name=else1]").click(function(){
					$(this).css("display","none");
					$("[name=list1]").css("display","");
				});
				$("[name=else2]").click(function(){
					$(this).css("display","none");
					$("[name=list2]").css("display","");
				});
				$("[name=else3]").click(function(){
					$(this).css("display","none");
					$("[name=list3]").css("display","");
				});
			});