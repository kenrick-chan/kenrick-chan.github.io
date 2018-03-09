var colorList = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(255, 0, 255)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = randomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

colorDisplay.textContent = pickedColor

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
			messageDisplay.textContent = "Correct"; }
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