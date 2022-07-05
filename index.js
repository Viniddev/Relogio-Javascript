//pegar os valores do meu html referentes a hora, min, sec;
const horas = window.document.getElementById("horas");
const minutos = window.document.getElementById("minutos");
const segundos = window.document.getElementById("segundos");

//criamos uma var relogio que abriga a biblioteca setInterval e a função Time;
const relogio = setInterval(function time(){
    //importando data do sistema;
    let datahoje = new Date();
    
    //desmembrando o objeto;
    let h = datahoje.getHours();
    let min = datahoje.getMinutes();
    let s = datahoje.getSeconds();
    
    //verificação do tamanho da hora + concatenação do 0;
    if (h<10){h = '0'+ h}
    if (min<10){min = '0'+ min}
    if (s<10){s = '0'+ s}
        
    //cor de fundo;
    if (h>=5 && h<13){
        document.body.style.background = "linear-gradient(120deg, yellow , orangered)";
    }else if(h>=13 && h<18){
        document.body.style.background = "linear-gradient(120deg, orangered, red)";
    }else if(h>=18 && h<19){
         document.body.style.background = "linear-gradient(120deg, blueviolet, darkblue)";
    }else{
         document.body.style.background = "linear-gradient(120deg, darkblue, black)";
    }
    
    //retorno dos valores;
    horas.textContent = h;
    minutos.textContent = min;
    segundos.textContent = s;
    
})