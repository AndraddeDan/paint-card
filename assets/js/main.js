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

function canvasColor() {
  color = document.querySelector('canvas').value;
  return color;
}

// BOTÃO DE SELECT COM A COR SELECIONADA
var select = document.querySelector('.select');
select.style.backgroundColor = brushColor();
