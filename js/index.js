// A DOM (Document Objec Model) é Event-driven = direcionada a eventos.

// Programação imperativa -> Você dá ordens passo a passo do que deve ser feito 
//(busque o elemento pelo seletor, adicione tal coisa a sua classe, etc.) Como por exemplo os comandos denro das funções

//Programaçao declaraiva -> Você só declaro o que deve ser feito, como no evento de clicar rodar uma função
// vc não precisa dizer o que a função faz, apenas a declara e ela realiza o trabalho.

import { Controls } from "./controls.js";
import {Timer} from "./timer.js";

const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonStopwatch = document.querySelector(".stopwatch");
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundMute = document.querySelector(".sound-mute");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");



const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonStopwatch,
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay,
  resetControls: controls.reset,
})

// Abaixo estou adicionando um eveto no botão play, ou seja, quando eu der um clique no botão ele vai execuar uma função.
//Para adicionar um evento na variável ou objeto eu devo usar o .addEventLister = adicionar eveto e ouvidor (o ouvidor é a função que vai receber o evento)
//Após ocorrer o evento de clique a função ouvidora vai ser chamada de volta para ser execuada, nós chamamos isso de callback (chamar de volta). 

buttonPlay.addEventListener('click', function() {
  controls.play();
  timer.secondsCountdown();
});
buttonPause.addEventListener('click', function() {
  controls.pause();
  timer.hold();
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
});
buttonStop.addEventListener('click', timer.reset);
buttonSoundOn.addEventListener('click', function () {
  buttonSoundOn.classList.add('hide');
  buttonSoundMute.classList.remove('hide');
});
buttonSoundMute.addEventListener('click', function () {
  buttonSoundMute.classList.add('hide');
  buttonSoundOn.classList.remove('hide');
});
