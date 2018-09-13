var canvas = document.querySelector('canvas');
var brush = canvas.getContext('2d');

var canvasPosition = canvas.getBoundingClientRect();

function brushSize() {
  var size = document.querySelector('#size').value;
  return size;
}

function brushColor() {
  color = document.querySelector('#cor').value;
  return color;
}

// BOTÃO DE SELECT COM A COR SELECIONADA
var select = document.querySelector('.select');

var select = document.querySelector('.select'); 
document.body.addEventListener('onmousemove', function(){
  this.style.backgroundColor = brushColor();
});

select.style.backgroundColor = brushColor();

function mousePosition(event) {
  var x = event.pageX;
  var y = event.pageY;

  console.log(x, y);
}

var draw = false;

function canDraw() {
  draw = true;
}

function cantDraw() {
  draw = false;
}

// canvas.onmousemove = mousePosition;
