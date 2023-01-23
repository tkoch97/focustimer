// A DOM (Document Objec Model) é Event-driven = direcionada a eventos.

// Programação imperativa -> Você dá ordens passo a passo do que deve ser feito 
//(busque o elemento pelo seletor, adicione tal coisa a sua classe, etc.) Como por exemplo os comandos denro das funções

//Programaçao declaraiva -> Você só declaro o que deve ser feito, como no evento de clicar rodar uma função
// vc não precisa dizer o que a função faz, apenas a declara e ela realiza o trabalho.

import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import Sound from "./sounds.js";
import {Events} from "./events.js";
import { 
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonStopwatch,
  buttonSoundOn,
  buttonSoundMute,
  minutesDisplay,
  secondsDisplay
} from "./elements.js";

const sounds = Sound ();
const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonStopwatch,
});
const timer = Timer({
  minutesDisplay, 
  secondsDisplay,
  resetControls: controls.reset,
});

Events({controls, timer, sounds});