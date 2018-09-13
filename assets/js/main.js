var canvas = document.querySelector('canvas');
var brush = canvas.getContext('2d');

var canvasPosition = canvas.getBoundingClientRect();

// Cores experimentais //
brush.fillStyle = '#ffff99';
brush.fillRect(0, 0, 600, 400);

function brushSize() {
  var size = document.querySelector('#size').value;
  return size;
}

function brushColor() {
  color = document.querySelector('#cor').value;
  return color;
}

// function canvasColor() { color = document.querySelector('canvas').style.backgroundColor; return color; }
