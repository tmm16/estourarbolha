/*Função para adicionar a bolha*/
function addBolha() {

    /*Criando uma DIV com a classe bolha*/
    var bolha = document.createElement("div");
    bolha.setAttribute("class","bolha");

    /*Definindo posições aleatórias para a bolha*/
    var x = Math.floor(Math.random() * 500);
    var y = Math.floor(Math.random() * 400);
    /*Define uma cor aleatória para a bola*/
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    
    /*Atualiza CSS de .bolha*/
    bolha.setAttribute("style", "left:"+x+"px;top:"+y+"px;background-color: rgb("+red+","+green+","+blue+");");

    /*Definindo ação para estourar bola ao clicar*/
    bolha.setAttribute("onclick", "estourar(this)");

    /*Adicionando a bolha na tela*/
    document.body.appendChild(bolha);

}

/*Função para estourar bolhas ao clicar*/
function estourar(bolha) {

    document.body.removeChild(bolha);

}

/*Função para iniciar o jogo e configurar o tempo para cada nova bolha*/
function iniciar() {

    setInterval(addBolha, 1000);

}