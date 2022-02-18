/*
	tabtncan.js
	A simple UI using textarea, button, and canvas
	
	Sparisoma Viridi | https://github.com/dudung/bugx-vis
	
	20220218 Start this example application.
	0937 Create main initVisualElement functions, empty.
	1825 Make clearCanvas and drawCircle functions.
*/

// define global variables
var div, divL, divR;
var ta, btn, can;


// call all necessary function
function main() {
	initVisualElement();
}


// initialize visual element
function initVisualElement() {
	div = document.createElement('div');
	div.style.width = 400;
	div.style.height = 250;
	div.style.border = "0px solid #000";
	div.style.background = "#eee";

	divL = document.createElement('div');
	divL.style.float = "left";
	divL.style.width = 150;
	divL.style.height = 250;
	divL.style.background = "#fdd";
	divL.style.border = "0px solid #000";

	divR = document.createElement('div');
	divR.style.float = "right";
	divR.style.width = 250;
	divR.style.height = 250;
	divR.style.background = "#ddf";
	
	ta = document.createElement('textarea');
	ta.style.width = 150;
	ta.style.height = 228;
	ta.style.overflowY = "scroll";
	ta.value = "100 100 20\n"
		+ "200 200 10\n"
		+ "100 250 50";
	
	btn = document.createElement('button');
	btn.innerHTML = "Draw circle(s)";
	btn.addEventListener("click", clickButton);
	
	can = document.createElement('canvas');
	can.width = 250;
	can.height = 250;
	can.style.width = 250;
	can.style.height = 250;
	can.style.border = "0px solid #000";
	
	document.body.append(div);
	div.append(divL);
		divL.append(ta);
		divL.append(btn);
	div.append(divR);
		divR.append(can);
}

// clear canvas
function clearCanvas() {
	var ctx = can.getContext('2d');
	ctx.clearRect(0, 0, can.width, can.height);
}

// draw circle
function drawCircle(x, y, r) {
	var ctx = can.getContext('2d');
	ctx.arc(x, y, r, 0, 2 * Math.PI)
	ctx.stroke();
}

// do something when button is clicked
function clickButton() {
	console.log("Draw circle(s)");
	
	var lines = ta.value.split('\n');
	var N = lines.length;
	for(i = 0; i < N; i++) {
		console.log(lines[i]);
	}
}