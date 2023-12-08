const colunas = document.querySelector(".column");

//variavel para armazenar o item atual arrastado
let ItemArratado = null;
 
//Adiciona um ouvinte ao evento "dragstar" a cada elemento com a classe "column"
colunas.forEach(item =>{
    item.addEventListener("dragstar", (e) =>{
        //Define o item sendo arrastado
        draggingItem = e.target;

        //Adiciona a classe "dragging" ao item para destaca-lo visualmente
        draggingItem.classList.add("dragging");

    })

//Adiciona um ouvinte ao evento "dragend" para limpar o estado do arrastado
item.addEventListener("dragend", () =>{
    draggingItem.classList.remove("dragging");
    
    draggingItem = null;
})
});

//Adiciona um ouvinte ao evento "dragover" a cada elemento com a classe "column"
colunas.forEach((item) =>
{
    item.addEventListener("dragover", (e) =>{
        e.preventDefault(); //previne o comportamento padrao de dragover
        //verifica se há um item sendo arrastado
        if(!draggingItem) return;

        const aplicarDepois = getNewPosition(item, e.clientY);

        //insere o item arrastado após o de referencia ou inicio da coluna
        if(aplicarDepois){
            aplicarDepois.insertAdjacentElement("afterend", draggingItem);
        } else{
            item.prepend(draggingItem);
        }
    });
});

//Função para calcular a nova posição do item na coluna 
function getNewPosition(colum, posY){
    const cards = column.querySelectorAll(".item:not(.dragging)");
    let result;

    for(let refer_card of cards){
        const box = refer_card.getBoundingClientRect();
        const boxCenterY = box.top + box.height /2;

        //verifica se a posição do mouse esta acima do cntro do item de referencia 
        if(posY >= boxCenterY) result = refer_card;
    }
    return result;
}