function accionPlay()
{
	if(!medio.paused && !medio.ended) 
	{
		medio.pause();
		play.value='\u25BA'; //\u25BA
    document.body.style.backgroundColor = '#fff';
	}
	else
	{
		medio.play();
		play.value='||';
    document.body.style.backgroundColor = 'grey';
	}
}

//Al pulsar el botón “reiniciar” si el vídeo está iniciado se reiniciará, 
// es decir, comenzará a reproducirse de nuevo desde el inicio.
function accionReiniciar()
{
    if(medio.currentTime != 0.0)
    {
        medio.currentTime = 0.0;
    }
    if(medio.paused)
    {
        play.value='\u25BA';
    }
}

//Al pulsar el botón “retrasar” la reproducción del vídeo saltará
//  5 segundos hacia atrás (cuidado valores negativos).
function accionRetrasar()
{
    if(medio.currentTime - 5.0 >= 0)
    {
        medio.currentTime -= 5.0;
    }
    else 
    {
        medio.currentTime = 0;
    }
}

// 5 s. adelante (cuidado de no exceder la duración del vídeo).
function accionAdelantar()
{
    if(medio.currentTime + 5.0 <= medio.duration)
    {
        medio.currentTime += 5.0;
    }
    else 
    {
        medio.currentTime = medio.duration;
    }
}

//Al pulsar el botón “silenciar” el sonido del vídeo se desactivará y 
// el texto del botón cambiará a “escuchar”. Al volver a pulsar el botón 
// se activará el sonido y se cambiará de nuevo el texto a “silenciar”.
function accionSilenciar()
{
    if(!medio.muted)
    {
        medio.muted = true;
        silenciar.value = 'Escuchar'
    }
    else
    {
        medio.muted = false;
        silenciar.value = 'Silenciar'
    }
}

//Al pulsar el botón “menosVolumen” se bajará el 
// volumen del vídeo 0.1 puntos hasta llegar a 0 (valor mínimo).
function accionMasVolumen()
{
    if(medio.volume + 0.1 <= 1)
    {
        medio.volume += 0.1;
    }
}

//Al pulsar el botón masVolumen ( ) se subirá 
// el volumen del vídeo 0.1 puntos hasta llegar a 1 (máximo).
function accionMenosVolumen()
{
    if(medio.volume - 0.1 >= 0)
    {
        medio.volume -= 0.1;
    }
}

function iniciar() 
{
	
	medio=document.getElementById('videoBunny');
	play=document.getElementById('play');
	reiniciar=document.getElementById('reiniciar');
	retrasar=document.getElementById('retrasar');
	adelantar=document.getElementById('adelantar');
	silenciar=document.getElementById('silenciar');

	play.addEventListener('click', accionPlay);
	reiniciar.addEventListener('click', accionReiniciar);
	retrasar.addEventListener('click', accionRetrasar);
	adelantar.addEventListener('click', accionAdelantar);
	silenciar.addEventListener('click', accionSilenciar);
	menosVolumen.addEventListener('click', accionMenosVolumen);
	masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);