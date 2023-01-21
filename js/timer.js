export function Timer({
  minutesDisplay, 
  secondsDisplay,
  resetControls,
}) {

  let timerTimeOut; // Função feita para receber o resulado do setTimeOut
  let minutes = Number(minutesDisplay.textContent);

  const updateDisplay = (newMinutes, seconds) => {
    newMinutes = newMinutes === undefined ? minutes : newMinutes; // opção ternária (se o valor de newMinutes for igual a "undefined", retorna os minutos originais, se não for igual a "undefined", retorna os newMinutes.)
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }
  
  const reset = () => {
    resetControls();
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  }
  
  //O setTimeout é uma função do JavaScript que permite que uma ação seja executada após um determinado período de tempo, calculado em milesegundos.
  const secondsCountdown = () => {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <=0;

      if (isFinished) {
          resetControls();
          updateDisplay();
          return;
        }
  
      if (seconds <= 0) {
        seconds = 10;
        --minutes;
      }
      
      updateDisplay(minutes, String(seconds -1));
  
      secondsCountdown(); // para fazer uma função ser executada de novo nós a chamamos dentro dela mesma, isso se chama recursão (quando a contagem chegar ao fim, recomeçará em 59)
    }, 1000)
  }

  const hold = () => clearTimeout(timerTimeOut);

  const updateMinutes = (newMinutes) => minutes = newMinutes;

  return {
    updateDisplay,
    reset,
    secondsCountdown,
    updateMinutes,
    hold,
  }
  
}

