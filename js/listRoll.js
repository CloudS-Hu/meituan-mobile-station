//页面滑动
			$(document).ready(function() {
				var startX = 0;
				var endX = 0;
				var page = 0;
				var X = 0;
				document.getElementById("automove").addEventListener("touchstart", function() {
					startX = event.touches[0].pageX;
				});
				document.getElementById("automove").addEventListener("touchmove", function() {
					endX = event.touches[0].pageX;
					X = endX - startX;
					if (page == 0) {
						if (X < 0) {
							$(".icon-list-move").css({
								"transform": "translateX(" + X + "px)"
							});
						}
					} else if (page == 1) {
						if (X > 0) {
							$(".icon-list-move").css({
								"transform": "translateX(" + X + "px)"
							});
						}
					}
				});
				document.getElementById("automove").addEventListener("touchend", function() {
					if (X < 0) {
						$(".icon-list-move").css({"margin-left": "-100%"},500);
						$(".icon-list-move").css({
							"transform": "translateX(0px)"
						});
						$(".circleOne").css("background-color", "rgb(240,239,237)");
						$(".circleTwo").css("background-color", "rgb(6,193,174)");
						page = 1;
					} else if (X > 0) {
						$(".icon-list-move").animate({"margin-left": "0px"},500);
						$(".icon-list-move").css({
							"transform": "translateX(0px)"
						});
						$(".circleOne").css("background-color", "rgb(6,193,174)");
						$(".circleTwo").css("background-color", "rgb(240,239,237)");
						page = 0;
					}
				});
			});