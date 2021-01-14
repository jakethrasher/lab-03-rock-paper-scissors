export function didUserWin(player, computer) {
    if (player === 'rock' && computer === 'scissors') return 'win';
    if (player === 'paper' && computer === 'rock') return 'win';
    if (player === 'scissors' && computer === 'paper') return 'win';
    if (player === computer) return 'draw';
    else return 'lose';
}

// export function showComputerThrowImg(throw, element){
//     if ( throw === 'rock') element.src="./assets/rock.png";
//     if ( throw === 'paper') element.src="./assets/paper.png";
//     if ( throw === 'scissors') element.src="./assets/scissors.png";
// }