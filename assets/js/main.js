var canvas = document.querySelector('canvas');
var brush = canvas.getContext('2d');

var canvasPosition = canvas.getBoundingClientRect();

// Cores experimentais //
var paperColor = '#ffff99'
brush.fillStyle = paperColor;
brush.fillRect(0, 0, 600, 400);

function brushSize() {
  var size = document.querySelector('#size').value;
  return size;
}

function brushColor() {
  var color = document.querySelector('#cor').value;
  return color;
}

// function canvasColor() { color = document.querySelector('canvas').style.backgroundColor; return color; }
