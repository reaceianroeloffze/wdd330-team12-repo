// Creating a Countdown Timer

// Get the element that holds the timer
// In this case, a h1
const h1 = document.querySelector('#countdown');
// Retrieve the button element to start the timer
const startBtn = document.querySelector('#startButton');

// Store the starting time in a variable
let time = parseInt(prompt('Input an amount to count down from:'));
h1.innerText = time;

let timer
let timeUp

// When the start btn is clicked, start counting down from a user-specified interval
startBtn.addEventListener('click', () => {
    if (startBtn.textContent === 'Start') {
         timer = setInterval(() => {
            h1.innerText = time--;
        }, 1000);
        timeUp = setTimeout(() => {
            h1.innerText = 'Time is Up!';
        }, time * 1000 + 1000);
         startBtn.textContent = 'Pause';
    } else if (startBtn.textContent === 'Pause') {
        clearInterval(timer);
        clearTimeout(timeUp);
        startBtn.textContent = 'Start';
    }
})


