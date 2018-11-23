/*
 * Modo de cores alternadas
 * entre personalizada(custom)
 * e cores da paleta(shape)
 * tendo como padrao o 'custom'
 */

var colorMode = 'custom';

/*
 * A funcao a seguir troca para
 * o modo custom quando o seletor
 * de cores for clicado.
 */

var selectColor = document.querySelector('.select');
selectColor.addEventListener('click', function(){
  colorMode = 'custom';
});


// Cor padrao no modo shape //
var colorShape = 'rgb(0,0,0)';

/*
 * A funcao a seguir troca para
 * o modo shape quando alguma cor
 * na paleta de cores for clicada.
 */

var shapeColor = document.querySelector('.colors');
shapeColor.addEventListener('click', readyColor);

function readyColor(event){
  clickedObject = event.target;
  var style = getComputedStyle(clickedObject);
  var currentColor = style.backgroundColor;
  //console.log(currentColor);

  var select = document.querySelector('.select');
  select.style.backgroundColor = currentColor;
  colorMode = 'shape';
  colorShape = currentColor;
  
};

/*
 * A funcao a seguir depende
 * do modo de cor escolhido
 * pelo usuario para devolver
 * a cor que o pincel devera
 * operar
 */

function brushColor() {
  if(colorMode == 'custom'){
    var color = document.querySelector('#cor').value;
    return color;
  }
  if(colorMode == 'shape'){
    var color = colorShape;
    return color;
  }
}

