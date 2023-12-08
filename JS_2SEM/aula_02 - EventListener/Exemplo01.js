//selecionando botão pelo ID
const botao01 = document.querySelector('#aumentar');
const botao02 = document.querySelector('#diminuir');
const botao03 = document.querySelector('#zero');
const contadorElemento = document.querySelector('#contador');

//inicializando contador
let contador = 0;

//função que sera chamada pelo eventListener 
function contando(){
    contador++
    contadorElemento.textContent = contador;
}
function tirar(){
    contador--
    contadorElemento.textContent = contador;
}
function zerando(){
    contador = 0;
    contadorElemento.textContent = contador;
}

//adicionando ouvinte do evento de click
botao01.addEventListener('click', contando);
botao02.addEventListener('click', tirar);
botao03.addEventListener('click', zerando);
