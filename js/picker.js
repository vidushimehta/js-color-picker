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

