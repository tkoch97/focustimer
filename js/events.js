// Abaixo estou adicionando um eveto no botão play, ou seja, quando eu der um clique no botão ele vai execuar uma função.
//Para adicionar um evento na variável ou objeto eu devo usar o .addEventLister = adicionar eveto e ouvidor (o ouvidor é a função que vai receber o evento)
//Após ocorrer o evento de clique a função ouvidora vai ser chamada de volta para ser execuada, nós chamamos isso de callback (chamar de volta). 

import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonStopwatch,
  buttonSoundOn,
  buttonSoundMute,
} from "./elements.js"

export function Events(
  {
    controls,
    timer,
    sounds,
  }
) {
  buttonPlay.addEventListener('click', function() {
    controls.play();
    timer.secondsCountdown();
    sounds.pressButton();
  });

  buttonPause.addEventListener('click', function() {
    controls.pause();
    timer.hold();
    sounds.pressButton();
  });

  buttonStopwatch.addEventListener('click', function () {
    let newMinutes = controls.getMinutes();
    if (!newMinutes) {
      timer.reset();
      return;
    }
    newMinutes;
    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
    sounds.pressButton();
  });

  buttonStop.addEventListener('click', function () {
    timer.reset();
    sounds.pressButton();
  });

  buttonSoundOn.addEventListener('click', function () {
    buttonSoundOn.classList.add('hide');
    buttonSoundMute.classList.remove('hide');
    sounds.bgAudio.pause();
  });

  buttonSoundMute.addEventListener('click', function () {
    buttonSoundMute.classList.add('hide');
    buttonSoundOn.classList.remove('hide');
    sounds.bgAudio.play();
  });
}
