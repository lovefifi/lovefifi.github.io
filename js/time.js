function showTime() {
	var currentDate = new Date();
	var startDate = new Date(2021, 06, 23);
	var date3 = currentDate-startDate;
	var days=Math.floor(date3/(24*3600*1000));
	var leave1=date3%(24*3600*1000);     //计算天数后剩余的毫秒数
	var hours=Math.floor(leave1/(3600*1000));
	var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
	var minutes=Math.floor(leave2/(60*1000));
	var leave3=leave2%(60*1000);          //计算分钟数后剩余的毫秒数
	var seconds=Math.round(leave3/1000);
	if (minutes < 10)
	minutes = "0" + minutes;
	if (seconds < 10)
	seconds = "0" + seconds;

	var currentTimeString =
	   "</br></br>"
	  + "<c style=\"color: #00008B; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:20px\" > Dear 小猫 </br> </c>"
		+ "<c style=\"color: #00008B; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:20px\" > I have been here with you for </br></c>"
		+ "<c style=\"color: #00008B; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + days +" </c>"
		+ "<c style=\"color: #00008B; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:20px\" > days </c>"
		+ "<c style=\"color: #00008B; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + hours+" </c>"
		+ "<c style=\"color: #00008B; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:20px\" > hours </c>"
		+ "<c style=\"color: #00008B; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + minutes+" </c>"
		+ "<c style=\"color: #00008B; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:20px\" > minutes </c>"
		+ "<c style=\"color: #00008B; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" +seconds+" </c>"
		+ "<c style=\"color: #00008B; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" > seconds </c>"
		;


	document.getElementById("show").innerHTML=currentTimeString;
	window.setTimeout("showTime()", 1000);
}
