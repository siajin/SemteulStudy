const color = document.querySelector("#color");
const colorInput = document.querySelector("#colorInput");

function colorChange() {
    color.innerText = colorInput.value;
    color.style.backgroundColor = colorInput.value;
}