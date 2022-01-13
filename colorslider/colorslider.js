console.log("Program starts working");

const sliders = document.querySelectorAll("input");
const redValue = document.getElementById("redValue");
const greenValue = document.getElementById("greenValue");
const blueValue = document.getElementById("blueValue");

var red = sliders[0].value;
var green = sliders[1].value;
var blue = sliders[2].value;
document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

function setColor(sliderName, sliderValue) {
    if (sliderName == "redSlider") {
        red = sliderValue;
    } else if (sliderName == "greenSlider") {
        green = sliderValue;
    } else if (sliderName == "blueSlider") {
        blue = sliderValue;
    }

    // console.log("red slider:" + red + "\n green slider:" + green + "\n blue slider: " + blue);
    redValue.innerHTML = red;
    greenValue.innerHTML = green;
    blueValue.innerHTML = blue;

    document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

for (let i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener("input", function() {
        setColor(sliders[i].name, sliders[i].value);
    });
}