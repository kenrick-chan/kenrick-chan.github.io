var colorList = generateRandomColor(6);
/*[
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(255, 0, 255)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
]*/

var squares = document.querySelectorAll(".square");
var pickedColor = randomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");
var banner = document.querySelector(".banner");

console.log(banner);

colorDisplay.textContent = pickedColor

resetButton.addEventListener("click", function() {
	if (resetButton.textContent === "Play Again!") {
		resetButton.textContent = "New Colors";
	}
	resetColors();
})

function resetColors() {
	// change array of Colors
	colorList = generateRandomColor(6);
	// assign new winning color
	pickedColor = randomColor();
	// apply new colors to squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colorList[i];
	}
	// show new pickedColor
	colorDisplay.textContent = pickedColor;
	// reset banner to default
	banner.style.backgroundColor = "#232323";
}

for(var i=0; i < squares.length; i++) {
	// assigned color to square
	squares[i].style.backgroundColor = colorList[i];

	// add clicked
	squares[i].addEventListener("click", function() {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare colors
		if(clickedColor === pickedColor) {
			changeColors(pickedColor);
			messageDisplay.textContent = "Correct";
			banner.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again!"; }
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"}
	})
}


function changeColors(color) {
	//loop through squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}

}

function randomColor() {
	return (colorList[Math.floor(Math.random() * colorList.length)])
}

function generateRandomColor(num) {
	// make an array
	var arr = [];
	// gloop through num times
	for (var i = 1; i < num; i++) {
		// generate random number; push to array
		arr.push(randomRGBColor());
	}
	// return array
	return arr
}

function randomRGBColor() {
	// Generate red
	var red = Math.floor(Math.random()*256);
	// Generate Green
	var green = Math.floor(Math.random()*256);
	// Generate Blue
	var blue = Math.floor(Math.random()*256);
	var rgbString = "rgb(" + red.toString() + ", " + green.toString() + ", " +blue.toString() + ")";
	return rgbString;
}