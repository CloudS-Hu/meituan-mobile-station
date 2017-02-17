//页面置顶-隐藏和显示
			$(document).ready(function() {
				setInterval(function() {
					if (window.scrollY < 500) {
						$("#top-btn").css("display", "none");
					} else {
						$("#top-btn").css("display", "initial");
					}
				}, 100);
			});