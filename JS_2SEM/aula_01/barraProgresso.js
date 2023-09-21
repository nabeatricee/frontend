function animarBarraProgresso() {
    //declarando as variáveis e atribuindo os valores através dos elementoss da DON
    var progresso = 0;
    var barra = $(".progress-bar");
    var barraProgresso = $(".progress");

    var intervalo = setInterval(function () {
        if (progresso > 100) {
            clearInterval(intervalo);
            barraProgresso.hide();
            document.body.style.backgroundImage = `url("https://i.pinimg.com/564x/11/fb/78/11fb78dcba039b3265d154fc78c927fe.jpg")`
        }
        else {
            progresso+= 10;
            barra.css("width", progresso + "%");
        }
    },250);
}