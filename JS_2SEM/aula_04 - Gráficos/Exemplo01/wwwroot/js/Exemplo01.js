//dados para o gráfico
var data = {
    //rotulos do grafico
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],

    //propriedades do gráfico
    datasets: [{
        label: 'Vendas 2023',
        backgroundColor: 'rgba(76, 193, 192, 0.6)',
        borderColor: 'rgba(0, 192, 150, 1)',
        borderWidth: 1,
        data: [12, 19, 20, 8, 11, 27]
    },{
        label: 'Vendas 2023',
        backgroundColor: 'rgba(240, 59, 159, 0.8)',
        borderColor: 'rgba(210, 0, 115, 0.8)',
        borderWidth: 1,
        data: [10, 14, 25, 18, 6, 25]
    }]
};

//configurações do gráfico
var options={
    scales:{
        y:{
            begginAtZero: true
        }
    }
};

//criar o gráfico de barras 
var ctx = document.querySelector('#grafico');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});