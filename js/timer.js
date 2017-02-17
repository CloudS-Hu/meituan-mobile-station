$(document).ready(function() {
	function timeForm(x) {
		return (x < 10 && x >= 0) ? "0" + x : x;
	}
	setInterval(function() {
		var nowTime = new Date();
		var nowYear = nowTime.getFullYear();
		var nowMonth = nowTime.getMonth();
		var nowDate = nowTime.getDate();
		var nowHours = parseInt(nowTime.getHours());

		if (nowHours >= 0 && nowHours < 11) {
			var assignTime = new Date(nowYear, nowMonth, nowDate, 11, 00, 00);
			var countDown = parseInt((assignTime.getTime() - nowTime.getTime()) / 1000);
			var DownS = countDown % 60;
			var DownM = (parseInt(countDown / 60)) % 60;
			var DownH = parseInt(countDown / 3600);

			DownS = timeForm(DownS);
			DownM = timeForm(DownM);
			DownH = timeForm(DownH);

			document.getElementById("seconds").innerHTML = DownS;
			document.getElementById("minutes").innerHTML = DownM;
			document.getElementById("hours").innerHTML = DownH;
			document.getElementById("activity").innerHTML = "即将开始";

		} else if (nowHours >= 11 && nowHours <= 23) {
			var assignTime = new Date(nowYear, nowMonth, nowDate, 23, 59, 59);
			var countDown = parseInt((assignTime.getTime() - nowTime.getTime()) / 1000);
			var DownS = countDown % 60;
			var DownM = (parseInt(countDown / 60)) % 60;
			var DownH = parseInt(countDown / 3600);

			DownS = timeForm(DownS);
			DownM = timeForm(DownM);
			DownH = timeForm(DownH);

			document.getElementById("seconds").innerHTML = DownS;
			document.getElementById("minutes").innerHTML = DownM;
			document.getElementById("hours").innerHTML = DownH;
			document.getElementById("activity").innerHTML = "距离结束";
		}

	}, 100);
});