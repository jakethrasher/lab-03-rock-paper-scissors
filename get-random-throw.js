
export function getRandomThrow() {
    let randomNum = Math.ceil(Math.random() * 3);
    if (randomNum === 1) return 'rock';
    if (randomNum === 2) return 'paper';
    if (randomNum === 3) return 'scissors';
}


export function didUserWin(player, computer) {
    if (player === 'rock' && computer === 'scissors') return 'win';
    if (player === 'paper' && computer === 'rock') return 'win';
    if (player === 'scissors' && computer === 'paper') return 'win';
    if (player === computer) return 'draw';
    else return 'lose';
}
     




