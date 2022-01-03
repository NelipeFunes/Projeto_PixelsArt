//Feito na ajuda dos amigãozoes na sala de estudos <3
let linhas = 5;

for(let index = 0; index<linhas; index+=1){
    let lines = document.createElement('div');
    lines.classList.add('linha');
    document.getElementById('pixel-board').appendChild(lines);

    for(let i = 0; i<linhas;i+=1){
        let coluns = document.createElement('div');
        coluns.classList.add('pixel');
        lines.appendChild(coluns);
    }
}

let black = document.getElementById('preto');
let red = document.getElementById('vermelho');
let green = document.getElementById('verde');
let blue = document.getElementById('azul');

black.addEventListener('click', changeColor);
red.addEventListener('click', changeColor);
green.addEventListener('click', changeColor);
blue.addEventListener('click', changeColor);



function changeColor(){
    let colorSelected = document.querySelector(".selected");
    colorSelected.classList.remove('selected')
    
    let colorSelect = event.target;
    colorSelect.classList.add('selected');
}
let pixel = document.getElementById('pixel-board');
pixel.addEventListener('click', pintarPixel);

function pintarPixel(){
    let colorSelected = document.querySelector(".selected");
    colorSelecionada = colorSelected.getAttribute('id')
if (colorSelecionada === 'preto') {
    event.target.style.backgroundColor = 'black';
  } 
  else if (colorSelecionada === 'vermelho') {
    event.target.style.backgroundColor = 'red';
  } 
  else if (colorSelecionada === 'verde') {
    event.target.style.backgroundColor = 'green';
  } 
  else if (colorSelecionada === 'azul') {
    event.target.style.backgroundColor = 'blue';
  }
}