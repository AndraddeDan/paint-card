var canvas = document.querySelector('canvas');
var brush = canvas.getContext('2d');

var canvasPosition = canvas.getBoundingClientRect();

// COR PADRAO PARA O PAPEL //
var paperColor = '#ffff99'
brush.fillStyle = paperColor;
brush.fillRect(0, 0, 600, 400);

// TROCA A COR DO NOVO PAPEL //
var shapeBackgroundColor = document.querySelector('.background-color');
shapeBackgroundColor.addEventListener('click', newPaperColor);

function newPaperColor(event){
  clickedObject = event.target;
  var style = getComputedStyle(clickedObject);
  var currentColor = style.backgroundColor;
  paperColor = currentColor;
};


// TROCA DE PAPEL //
var newArt = document.querySelector('#newArt');
newArt.addEventListener('click', changePaper);

function changePaper(event){
  brush.fillStyle = paperColor;
  brush.fillRect(0, 0, 600, 400);
}


// BOTAO DE RESET DA ARTE //
var resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', changePaper);
