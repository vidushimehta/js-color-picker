function setSliderValue(slideAmount, id) {
  document.getElementById(id).value=slideAmount;

  displayColor();
}

function displayColor() {
	var redValue = document.getElementById("red").value;
	var greenValue = document.getElementById("green").value;
	var blueValue = document.getElementById("blue").value;
	
	document.getElementById("colorbox").style.background ="rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
}

function setRandomColor() {
	var redValue = Math.floor(Math.random() * 256);
	var greenValue = Math.floor(Math.random() * 256);
	var blueValue = Math.floor(Math.random() * 256);

	document.getElementById("red").value= redValue;
	document.getElementById("red_text").value = redValue;
	document.getElementById("green").value= greenValue;
	document.getElementById("green_text").value= greenValue;
	document.getElementById("blue").value = blueValue;
	document.getElementById("blue_text").value= greenValue;

	displayColor();
}

window.onload = setRandomColor;