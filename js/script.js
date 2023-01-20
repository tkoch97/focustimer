// A DOM (Document Objec Model) é Event-driven = direcionada a eventos.

// Programação imperativa -> Você dá ordens passo a passo do que deve ser feito 
//(busque o elemento pelo seletor, adicione tal coisa a sua classe, etc.) Como por exemplo os comandos denro das funções

//Programaçao declaraiva -> Você só declaro o que deve ser feito, como no evento de clicar rodar uma função
// vc não precisa dizer o que a função faz, apenas a declara e ela realiza o trabalho.

const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonStopwatch = document.querySelector(".stopwatch");
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundMute = document.querySelector(".sound-mute");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
let minutes = Number(minutesDisplay.textContent);
let timerTimeOut; // Função feita para receber o resulado do setTimeOut

const resetControls = () => {
  buttonStop.classList.add('hide');
  buttonStopwatch.classList.remove('hide');
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
}
const updateTimerDisplay = (minutes, seconds) => {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

const resetTimerdisplay = () => {
  resetControls();
  updateTimerDisplay(minutes, 0);
  clearTimeout(timerTimeOut);
}

//O setTimeout é uma função do JavaScript que permite que uma ação seja executada após um determinado período de tempo, calculado em milesegundos.
const secondCountdown = () => {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    
    
    if (minutes <= 0) {
      if (seconds > 0) {
        updateTimerDisplay(minutes, String(seconds -1));
      }
      else {
        resetControls();
        return;
      }
      
    }

    if (seconds <= 0) {
      seconds = 10;
      --minutes;
    }
    
    updateTimerDisplay(minutes, String(seconds -1));

    secondCountdown(); // para fazer uma função ser executada de novo nós a chamamos dentro dela mesma, isso se chama recursão (quando a contagem chegar ao fim, recomeçará em 59)
  }, 1000)
}
// Abaixo estou adicionando um eveto no botão play, ou seja, quando eu der um clique no botão ele vai execuar uma função.
//Para adicionar um evento na variável ou objeto eu devo usar o .addEventLister = adicionar eveto e ouvidor (o ouvidor é a função que vai receber o evento)
//Após ocorrer o evento de clique a função ouvidora vai ser chamada de volta para ser execuada, nós chamamos isso de callback (chamar de volta). 

buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide'); //classList é uma propriedade que permite manipular as classes de um elemento CSS sem precisar manipular as strings diretamente.
  buttonPause.classList.remove('hide');
  buttonStopwatch.classList.add('hide');
  buttonStop.classList.remove('hide');
  
  secondCountdown();
  
});
buttonPause.addEventListener('click', function() {
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
  clearTimeout(timerTimeOut);
});
buttonStopwatch.addEventListener('click', function () {
  minutes = prompt('Quantos minutos deseja cronometrar?') || 0;
  updateTimerDisplay(minutes, 0);
});
buttonStop.addEventListener('click', resetTimerdisplay);
buttonSoundOn.addEventListener('click', function () {
  buttonSoundOn.classList.add('hide');
  buttonSoundMute.classList.remove('hide');
});
buttonSoundMute.addEventListener('click', function () {
  buttonSoundMute.classList.add('hide');
  buttonSoundOn.classList.remove('hide');
});
