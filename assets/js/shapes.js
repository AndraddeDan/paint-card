function rectangle(event) {
  var x = event.pageX - canvasPosition.x - 8;
  var y = event.pageY - canvasPosition.y - 8;

  brush.fillStyle = brushColor();
  brush.fillRect(x, y, brushSize(), brushSize());
}

function circle(event) {
  var x = event.pageX - canvasPosition.x - 8;
  var y = event.pageY - canvasPosition.y - 8;

  brush.fillStyle = brushColor();
  brush.beginPath();
  brush.arc(x, y, brushSize() / 1.7, 0, 2 * Math.PI);
  brush.fill();
}

function triangle(event) {
  var x = event.pageX - canvasPosition.x - 8;
  var y = event.pageY - canvasPosition.y - 8;

  var magicNumber = brushSize();

  brush.fillStyle = brushColor();
  brush.beginPath();

  brush.moveTo(x, y - magicNumber / 2);
  brush.lineTo(x - magicNumber / 2, y + magicNumber / 2);
  brush.lineTo(x + magicNumber / 2, y + magicNumber / 2);
  brush.fill();
}
// canvas.onmousemove = triangle;
