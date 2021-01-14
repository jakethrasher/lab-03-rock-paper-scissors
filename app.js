import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './utils.js';

const playButton = document.getElementById('play');
const throwResult = document.getElementById('throw-result');
const winsSpan = document.getElementById('wins-span');
const lossesSpan = document.getElementById('losses-span');
const drawsSpan = document.getElementById('draws-span');
const whoWon = document.getElementById('who-won');

// initialize state
let wins = 0;
let totalPlays = 0;
let draws = 0;

// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    totalPlays++;

    const userThrow = document.querySelector('input[type="radio"]:checked');
    let computerThrow = getRandomThrow();
    let winOrLose = didUserWin(userThrow.value, computerThrow);
    throwResult.textContent = computerThrow;
   
    
    if (winOrLose === 'win') {
        wins++;
        winsSpan.textContent = `${wins}`;
    } else if (winOrLose === 'lose') {
        lossesSpan.textContent = `${totalPlays - wins}`;
    } else if (winOrLose === 'draw') {
        draws ++;
        drawsSpan.textContent = `${draws}`;
    }
});