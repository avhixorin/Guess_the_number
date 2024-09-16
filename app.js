let prevGuess = 0;
let remGuess = 10;
document.querySelector('#remGno').innerHTML = remGuess;

function randomGen() {
    return Math.floor(Math.random() * 100 + 1);
}

let actNum = randomGen();

function checkGameOver() {
    if (remGuess === 0) {
        document.querySelector('#result').innerHTML = `Sorry, you lost. The correct number was ${actNum}`;
        document.querySelector('#submit').disabled = true;
    }
}

function reset() {
    document.querySelector('#result').innerHTML = '';
    document.querySelector('#textArea').value = '';
    remGuess = 10;
    document.querySelector('#remGno').innerHTML = remGuess;
    document.querySelector('#prevGno').innerHTML = '';
    document.querySelector('#submit').disabled = false;
    actNum = randomGen();
}

document.querySelector('#submit').addEventListener('click', () => {
    if (remGuess > 0) {
        remGuess--;
        document.querySelector('#remGno').innerHTML = remGuess;

        let userNum = parseInt(document.querySelector('#textArea').value, 10);

        if (isNaN(userNum) || userNum < 1 || userNum > 100) {
            document.querySelector('#result').innerHTML = `Please enter a valid number between 1 and 100`;
        } else {
            if (userNum ===actNum) {
                document.querySelector('#result').innerHTML = `Congratulations!!! You guessed it right`;
                document.querySelector('#submit').disabled = true;
            } else {
                document.querySelector('#result').innerHTML = `Sorry, try again`;
                document.querySelector('#prevGno').innerHTML = userNum;
                prevGuess = userNum;
            }
        }

        checkGameOver();
    }
});

document.querySelector('#reset').addEventListener('click', () => {
    reset();
});
