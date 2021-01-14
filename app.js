import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './did-user-win.js';

const playButton = document.getElementById('play');
const computerThrowSpan = document.getElementById('comp-throw');
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
    
    let randomNum = Math.ceil(Math.random() * 3);
    
    let computerThrow = getRandomThrow(randomNum);

    let winOrLose = didUserWin(userThrow.value, computerThrow);

    computerThrowSpan.textContent = `The computer threw ${computerThrow}`;

    if (winOrLose === 'win') {
        wins++;
        winsSpan.textContent = `${wins}`;
        whoWon.textContent = 'You won!!';
    } else if (winOrLose === 'draw') {
        draws++;
        drawsSpan.textContent = `${draws}`;
        whoWon.textContent = 'Its a draw!!';
    } else if (winOrLose === 'lose') {
        lossesSpan.textContent = `${totalPlays - (wins + draws)}`;
        whoWon.textContent = 'You lost!!';
    } 
});
