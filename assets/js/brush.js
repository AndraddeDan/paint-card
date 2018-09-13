function drawing(event) {
  var x = event.pageX - canvasPosition.x - 8;
  var y = event.pageY - canvasPosition.y - 8;

  // rectangle(x, y, brushSize(), brushColor());
  // circle(x, y, brushSize(), brushColor());
  // triangle(x, y, brushSize(), brushColor());
}

var draw = false;

function canDraw() {
  draw = true;
}

function cantDraw() {
  draw = false;
}

canvas.onmousemove = drawing;
