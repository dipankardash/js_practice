// text change
function textChange(){
	document.getElementById('h2').innerHTML="Hello";
}
// showDate
function showDate(){
	document.getElementById('d_h2').innerHTML=Date();
}
// bulb on/off

function bulbOn() {
	document.getElementById('img').src="images/on.gif";
}

function bulbOff() {
	document.getElementById('img').src="images/off.gif";
}
// font color change

function fontColor(){
	document.getElementById('fc_h2').style.color="#8e8e8e";
}

// font size Change

function fontChange(){
	document.getElementById('f_h2').style.fontSize="60px";
}
// window.Alert

function windowAlert(){
	window.alert("Don't mind.");
}
// show/hide
function show(){
	document.getElementById('sh_h2').style.display="block";
}
function hide(){
	document.getElementById('sh_h2').style.display="none";
}
// document.write
function resultOut(){
	document.write('Save Our Soul.')
}
// console.log
function cLog(){
	console.log('Save Our Soul.')
}