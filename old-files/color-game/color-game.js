var numOfSquares = 6;
var colorList = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");
var banner = document.querySelector(".banner");
var modeButtons = document.querySelectorAll(".mode")

init();

function init() {
	setupModeBtn();
	setupSquares();
	resetColors();
}

function setupModeBtn() {
	for (var i=0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			for (var j=0; j < modeButtons.length; j++) {
				modeButtons[j].classList.remove("selected");
			}
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfSquares=3 : numOfSquares=6;
			resetColors();
		})
	}
}

function setupSquares() {
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
}

resetButton.addEventListener("click", function() {
	resetColors();
})

// Function resets the game
function resetColors() {
	resetButton.textContent = "New Colors"; // Reset resetButton
	messageDisplay.textContent = ""; // Reset messageDisplay
	banner.style.backgroundColor = "steelblue"; // Reset banner to default backgroundColor
	colorList = generateRandomColor(numOfSquares); // Generate new array of colors
	pickedColor = randomColor(); // Assign winning color
	// apply new colors to squares
	for (var i = 0; i < squares.length; i++) {
		if(colorList[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colorList[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	colorDisplay.textContent = pickedColor; // Show new color to guess
}

// Function changes the color of div element 'square'
function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

// Function chooses an RGB from array 'colorList' 
function randomColor() {
	return (colorList[Math.floor(Math.random() * colorList.length)])
}


// Function calls randomRGBColor 'num' times
// Inserts into array 'arr'
// At end of for loop, returns 'arr'
function generateRandomColor(num) {
	var arr = [];
	for (var i = 1; i < num+1; i++) {
		arr.push(randomRGBColor());
	}
	return arr
}

// Function is used to randomly generate a new RGB string
function randomRGBColor() {
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	var rgbString = "rgb(" + red.toString() + ", " + green.toString() + ", " +blue.toString() + ")";
	return rgbString;
}

