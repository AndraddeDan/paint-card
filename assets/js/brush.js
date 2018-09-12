var canvas = document.querySelector("canvas");
var brush = canvas.getContext("2d");

var canvasPosition = canvas.getBoundingClientRect();

console.log(canvasPosition);
// console.log(canvas.offsetLeft);

var draw = false;

brushSize = document.querySelector("#size").value;
brushColor = document.querySelector("#cor").value;

// BOTÃO DE SELECT COM A COR SELECIONADA
var select = document.querySelector(".select");
select.style.backgroundColor = brushColor;

function mousePosition(event){
  var x = event.pageX;
  var y = event.pageY;

  console.log(x, y);
}

function canDraw(){
  draw = true;
}

function cantDraw(){
  draw = false;
}

// canvas.onmousemove = mousePosition;
