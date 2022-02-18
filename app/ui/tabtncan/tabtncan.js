/*
	tabtncan.js
	A simple UI using textarea, button, and canvas
	
	Sparisoma Viridi | https://github.com/dudung/bugx-vis
	
	20220218 Start this example application.
	0937 Create main initVisualElement functions, empty.
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
	div.style.height = 300;
	div.style.border = "1px solid #000";
	div.style.background = "#eee";

	divL = document.createElement('div');
	divL.style.float = "left";
	divL.style.width = 100;
	divL.style.height = 300;
	divL.style.background = "#fdd";

	divR = document.createElement('div');
	divR.style.float = "right";
	divR.style.width = 300;
	divR.style.height = 300;
	divR.style.background = "#ddf";
	
	document.body.append(div);
	div.append(divL);
	div.append(divR);	
}
