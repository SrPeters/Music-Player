//Variável Global
var audio;

//Página carregada
function onLoadPage() {
    //Acessar controle Audio via JavaScript
    audio = document.getElementById("audio");

    audio.addEventListener("play", onPlayMusic, false);
    audio.addEventListener("timeupdate", onAtualizarTempo, false);
    document.getElementById('barra_progresso').addEventListener('click', function (e) {
        var x = e.pageX - this.offsetLeft;
        var duracaoBarra = document.getElementById('barra_progresso').offsetWidth;
        var atual = x / duracaoBarra;
        audio.currentTime = atual * audio.duration;
    });
}

//Controlar Volume
function volume(controle){
    audio.volume = controle.value;
}

//Tocar Música
function play(){
    audio.play();
}

//Pausar música
function pause(){
    audio.pause();
}
//Parar música
function stop(){
    audio.pause();
    audio.currentTime = 0;
}
/**
* Evento - Quando tocar a música – Carregar Barra e Tempo Atual/Total
*/
function onPlayMusic(){
    document.getElementById("tempo_atual").innerHTML = secToStr(audio.currentTime);
    document.getElementById("tempo_total").innerHTML = secToStr(audio.duration);
    document.getElementById("barra_progresso").max = audio.duration;
    document.getElementById("barra_progresso").value = audio.currentTime;
}

/**
* Evento - Atualizar o Tempo
*/
function onAtualizarTempo(){
    document.getElementById("tempo_atual").innerHTML = secToStr(audio.currentTime);
    document.getElementById("barra_progresso").value = audio.currentTime;
}
/**
* Converte segundos em Tempo formatado hh/mm/ss
*
*/
function secToStr( seg ) {
    seg = Math.floor( seg );
    var horas = Math.floor(seg / 3600);
    var minutos = Math.floor((seg - (horas * 3600)) / 60);
    var segundos = seg - (horas * 3600) - (minutos * 60);

    if (horas < 10) horas = "0"+horas;
    if (minutos < 10) minutos = "0"+minutos;
    if (segundos < 10) segundos = "0"+segundos;

    return horas+":"+minutos+":"+segundos;
}