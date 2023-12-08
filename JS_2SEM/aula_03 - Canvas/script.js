//atribui uma variável o elemento selecionado
canvas = document.querySelector('canvas');

//definir o tamanho do canvas
canvas.width = 800;
canvas.heigth = 600;

//a variavel c se torna um objeto onde pode ser atribuído métodos
c = canvas.getContext('2d');

//atribuimos propriedades e metodo ao nosso
//objeto
//posições(X, Y, width, heigth)
c.fillStyle = "rgb(148, 61, 99)";
c.fillRect(20, 90, 100, 50);
c.fillStyle = "rgb(119, 61, 148)";
c.fillRect(180, 50, 20, 70);
c.fillStyle = "rgb(74, 61, 148)";
c.fillRect(100, 10, 50, 30);

//desenhando uma linha
c.beginPath();
//posição inicio da linha 
c.moveTo(50, 450);
c.lineTo(700, 50);
c.strokeStyle = "black";
c.stroke();
//encerra o caminho
c.closePath();
//criando um circulo
//posições para criação
//(X, Y, raio, anguloInicial, anguloFinal)

c.beginPath()
c.arc(400, 450, 100, 0, Math.PI * 2);
c.fillStyle = "rgba(0,0,255,0.5)";
c.stroke();
c.fill();
c.closePath();