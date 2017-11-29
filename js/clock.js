
function clock(){
	this.date=new Date();
	this.hour=date.getHours();
	this.minute=date.getMinutes();
	this.second=date.getSeconds();
	document.getElementById("hour").innerHTML=hour;
	document.getElementById("minute").innerHTML=minute;
	document.getElementById("second").innerHTML=second;
	
	
}
setInterval(clock,1000);
