const count = document.querySelector('p');
const upbtn = document.getElementById('up');
const downbtn = document.getElementById('down');

function countUp() {
    count.innerText = parseInt(count.innerText) + 1
}

function countDown() {
    count.innerText = parseInt(count.innerText) - 1
}