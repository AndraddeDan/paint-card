function rectangle(event){

  var x = event.pageX - canvasPosition.x - 8;
  var y = event.pageY - canvasPosition.y - 8;

  brush.fillStyle = brushColor;
  brush.fillRect(x, y, brushSize, brushSize);
}

canvas.onclick = rectangle;
