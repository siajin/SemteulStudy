var upButton = document.getElementById("upButton");
var downButton = document.getElementById("downButton");
var result = document.getElementById("text");

var resultNum = parseInt(result.innerText);

upButton.addEventListener("click", up);
downButton.addEventListener("click", down);

function up(){
  resultNum = resultNum+1;
  result.innerText = ""+resultNum;
}

function down(){
  resultNum = resultNum-1;
  result.innerText = ""+resultNum;
}
