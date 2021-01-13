import { getRandomThrow, didUserWin} from './get-random-throw.js';

const playButton = document.getElementById('play');
const throwResult = document.getElementById('throw-result');
const winsSpan = document.getElementById('wins-span');
const lossesSpan = document.getElementById('losses-span');
const drawsSpan = document.getElementById('draws-span');
const whoWon = document.getElementById('who-won');

// initialize state
let wins=0;
let totalPlays = 0;

// set event listeners to update state and DOM
playButton.addEventListener('click', () =>{
    totalPlays++;
    console.log(totalPlays)
    //increment totalPlays
    //import getRandomThrow which returns rock paper or sciccors
    //import didUserWin which compares computer throw to user throw
        //user throw is input.value
    //if user wins increment wins
    //display who won and change textContent of wins losses and draws span
})