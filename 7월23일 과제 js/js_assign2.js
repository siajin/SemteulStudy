const colorDiv = document.querySelector('#color');
const colorInput = document.querySelector('#colorInput');

function colorChange() {
    const color = colorInput.value;
    colorDiv.style.backgroundColor = color;
    colorDiv.innerHTML = color;
}