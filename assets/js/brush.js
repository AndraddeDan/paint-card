function drawing(event) {

  // BOTÃO DE SELECT COM A COR SELECIONADA
  var select = document.querySelector('.select');
  select.style.backgroundColor = brushColor();

  var x = event.pageX - canvasPosition.x;
  var y = event.pageY - canvasPosition.y;

  if (draw && shape == 'circleFormat') {
    circle(x, y, brushSize(), brushColor());
  }
  if (draw && shape == 'rectangleFormat') {
    rectangle(x, y, brushSize(), brushColor());
  }
  if (draw && shape == 'triangleFormat') {
    triangle(x, y, brushSize(), brushColor());
  }
}

var draw = false;

function canDraw() {
  draw = true;
}

function cantDraw() {
  draw = false;
}

canvas.onmousemove = drawing;
canvas.onmousedown = canDraw;
canvas.onmouseup = cantDraw;
