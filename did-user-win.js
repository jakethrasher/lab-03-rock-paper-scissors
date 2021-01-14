export function didUserWin(player, computer) {
    if (player === 'rock' && computer === 'scissors') return 'win';
    if (player === 'paper' && computer === 'rock') return 'win';
    if (player === 'scissors' && computer === 'paper') return 'win';
    if (player === computer) return 'draw';
    else return 'lose';
}

