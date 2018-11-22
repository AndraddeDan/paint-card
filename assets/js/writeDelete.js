var drawingMode = 'brush';

function toErase(){
  drawingMode = 'erase';
  // console.log(drawingMode);
}

function toBrush(){
  drawingMode = 'brush';
  // console.log(drawingMode);
}

function drawing(event) {

  var x = event.pageX - canvasPosition.x;
  var y = event.pageY - canvasPosition.y;

  if(drawingMode == 'erase'){

    if (draw && shape == 'circleFormat') {
      circle(x, y, brushSize(), paperColor);
    }
    if (draw && shape == 'rectangleFormat') {
      rectangle(x, y, brushSize(), paperColor);
    }
    if (draw && shape == 'triangleFormat') {
      triangle(x, y, brushSize(), paperColor);
    }
  }

  if(drawingMode == 'brush'){
    // BOTÃO DE SELECT COM A COR SELECIONADA
    var select = document.querySelector('.select');
    select.style.backgroundColor = brushColor();

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

var eraseButton = document.querySelector('#erase');
eraseButton.addEventListener('click', toErase);

var brushButton = document.querySelector('#brush');
brushButton.addEventListener('click', toBrush);
