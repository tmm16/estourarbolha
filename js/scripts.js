function addBolha() {

    /*Criando uma DIV com a classe bolha*/
    var bolha = $('<div class="bolha"></div>');

    /*Definindo posições aleatórias para a bolha*/
    var x = Math.floor(Math.random() * 800);
    var y = Math.floor(Math.random() * 500);
    /*Define uma cor aleatória para a bola*/
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    
    /*Atualiza CSS de .bolha*/
    bolha.css('left',x+'px');
    bolha.css('top', y+'px');
    bolha.css('background-color', 'rgb('+red+','+green+','+blue+')');

    /*Adciona uma bolha ao site*/
    $(bolha).appendTo(document.body);

    /*Ao clicar na bolha*/
    bolha.on('click', function() {
        /*Ela vai desaparecer*/
        $(this).fadeOut('slow');
        /*Vai incrementar +1 ao placar*/
        placar++
        /*Vai atualizar o placar*/
        updatePlacar();
    
    });

}
/*Atualiza o placar*/
function updatePlacar() {
    $('#placar').html(placar);
}

/*Variavel placar*/
    var placar = 0;

    /*Aciona função ao clicar no botão*/
$(function() {

    $("#comecar").on('click', function(){

        setInterval(addBolha, 1000);

    });

});