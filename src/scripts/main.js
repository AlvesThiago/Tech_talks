const dataEvento = new Date("july 25, 2024 19:00:00");
const timeStampEvento = dataEvento.getTime();

const timer = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const distanciaAteEvento = timeStampEvento - timeStampAtual;

    const diasAteEvento = Math.floor(distanciaAteEvento / diaEmMs);
    const horasAteEvento = Math.floor((distanciaAteEvento % diaEmMs) / horasEmMs);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horasEmMs) / minutosEmMs);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if(distanciaAteEvento < 0){
        clearInterval(timer);
        document.getElementById('contador').innerHTML = `Inscrição encerrada`
    }

},1000);

AOS.init();