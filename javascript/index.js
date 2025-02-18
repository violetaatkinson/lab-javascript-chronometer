const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');

//get #splits where we are going to add the current time every time we press the split button - 
const splitsElement = document.getElementById('splits');



function printTime() {
  this.printMinutes();
  this.printSeconds();
  this.printMilliseconds();
}

function printMinutes() {
  const mins = chronometer.getMinutes();
  const minsDigit = chronometer.computeTwoDigitNumber(mins);

  const minsFirst = minsDigit.toString().charAt(0);
  const minsSecond = minsDigit.toString().charAt(1);

  minDecElement.textContent = minsFirst;
  minUniElement.textContent = minsSecond;

}

function printSeconds() {
  const secs = chronometer.getSeconds();
  const secsDigit = chronometer.computeTwoDigitNumber(secs);

  const secsFirst = secsDigit.toString().charAt(0);
  const secsSecond = secsDigit.toString().charAt(1);

  secDecElement.textContent = secsFirst;
  secUniElement.textContent = secsSecond

}

// ==> BONUS
function printMilliseconds() {
  const milisecs = chronometer.getMilliseconds();
  const  milisecsDigit = chronometer.computeTwoDigitNumber(milisecs);

  const  milisecsFirst = secsDigit.charAt(0);
  const  milisecsSecond = secsDigit.charAt(1);

  milDecElement.textContent = milisecsFirst;
  milUniElement.textContent = milisecsSecond;
}



function printSplit() {
  const li = document.createElement('li');
  li.classList.add('list-item');
  li.textContent = chronometer.split();
  splitsElement.appendChild(li);
}

function clearSplits() {
  splitsElement.innerHTML = ""

}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
/// cuando  esta corriendo el tiempo es slit y cuando este pausado sea reset
btnLeftElement.addEventListener('click', event => {

  btnLeftElement.classList.toggle(`stop`);
  btnLeftElement.classList.toggle(`start`);
  btnRightElement.classList.toggle(`reset`);
  btnRightElement.classList.toggle(`split`);

  if (btnLeftElement.textContent === 'START') {
    chronometer.start(printTime)
    btnLeftElement.textContent = 'STOP'
    btnRightElement.textContent = 'SPLIT';
  } else {
    chronometer.stop()
    btnLeftElement.textContent = 'START';
    btnRightElement.textContent = 'RESET';
  }

});


// Reset/Split Button
btnRightElement.addEventListener('click', event => {
  console.log(btnRightElement.textContent)
  if (btnRightElement.textContent === 'SPLIT') {
    printSplit()
  } else {
    chronometer.currentTime = 0
    minDecElement.textContent = "0"
    minUniElement.textContent = "0"
    secDecElement.textContent = "0"
    secUniElement.textContent = "0"
    milDecElement.textContent = "0"
    milUniElement.textContent = "0"
    splitsElement.textContent = "0"

    clearSplits()
    btnRightElement.textContent = 'SPLIT'
  }

  btnRightElement.classList.toggle('split')
  btnRightElement.classList.toggle('reset')

});