$(document).ready(function() {
	var x = 0;
	var leftTouch = true;
	document.getElementById("automove").addEventListener("touchstart", function() {
		x = event.touches[0].pageX;
	});
	document.getElementById("automove").addEventListener("touchmove", function() {
		var moveMarginLeft = parseInt($(".icon-list-move").css("margin-left").replace("px", ""));
		var moveMarginRight = parseInt($(".icon-list-move").css("margin-right").replace("px", ""));
		var slideMove = event.touches[0].pageX - x;

		if (moveMarginLeft <= 0 && slideMove <= 0 && $(".icon-list-next").css("display") == "none") {
			$(".icon-list-move").css({
				"transform": "translateX(" + (event.touches[0].pageX - x) + "px)"
			});
			$(".icon-list-current").css({
				"display": "none"
			});
			$(".icon-list-move").css({
				"display": "initial"
			});
			leftTouch = false;
		} else if (moveMarginRight >= 0 && slideMove >= 0 && $(".icon-list-current").css("display") == "none") {
			$(".icon-list-move").css({
				"transform": "translateX(" + (event.touches[0].pageX - x) + "px)"
			});
			$(".icon-list-next").css({
				"display": "none"
			});
			$(".icon-list-move").css({
				"display": "initial"
			});
			leftTouch = true;
		}
	});
	document.getElementById("automove").addEventListener("touchend", function() {
		if (leftTouch == false && $(".icon-list-next").css("display") == "none") {
			$(".icon-list-current").css({
				"display": "none"
			});
			$(".icon-list-next").css({
				"display": "initial"
			});
			$(".icon-list-move").css({
				"margin-left": "-100%",
				"display": "none"
			});
			/*$(".icon-list-cirle li:even").attr("class","");
			$(".icon-list-cirle li:odd").attr("class","active");*/
			$(".icon-list-cirle li:even").css("color","rgb(240,239,237)");
			$(".icon-list-cirle li:odd").css("color","rgb(6,193,174)");

		} else if (leftTouch == true && $(".icon-list-current").css("display") == "none") {
			$(".icon-list-next").css({
				"display": "none"
			});
			$(".icon-list-current").css({
				"display": "initial"
			});
			$(".icon-list-move").css({
				"margin-left": "0px",
				"display": "none"
			});
			/*$(".icon-list-cirle li:even").attr("class","avtive");
			$(".icon-list-cirle li:odd").attr("class","");*/
			$(".icon-list-cirle li:even").css("color","rgb(6,193,174)");
			$(".icon-list-cirle li:odd").css("color","rgb(240,239,237)");
		}
	});
});