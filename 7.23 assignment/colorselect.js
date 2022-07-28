var colorButton = document.getElementById("colorButton");
var area = document.getElementById("text");

colorButton.addEventListener("input", colorChange);

function colorChange(){
  area.style.backgroundColor = colorButton.value;
  area.innerText = colorButton.value;
}
