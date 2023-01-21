export function Controls ({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonStopwatch,
}){

  function getMinutes () {
    let newMinutes = prompt('Quantos minutos deseja cronometrar?');
    if (!newMinutes) {
      return false;
    }
    return newMinutes;
  }

  function play(){
    buttonPlay.classList.add('hide'); //classList é uma propriedade que permite manipular as classes de um elemento CSS sem precisar manipular as strings diretamente.
    buttonPause.classList.remove('hide');
    buttonStopwatch.classList.add('hide');
    buttonStop.classList.remove('hide');
  }
  
  function pause() {
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
  }

  function reset () {
    buttonStop.classList.add('hide');
    buttonStopwatch.classList.remove('hide');
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
  }

  return {
    play,
    pause,
    reset,
    getMinutes,
  }
}

