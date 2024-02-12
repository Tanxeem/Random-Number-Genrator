let randomNumber = parseInt(Math.random() *100 + 1);

const subt = document.querySelector('#subt');
let userrInput = document.querySelector('#guessField')
let guessSlot = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')
let lowOrhi = document.querySelector('.lowOrHi')
let startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame) {
    subt.addEventListener('click', (e)=>{
        e.preventDefault();
        const guess = parseInt(userrInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a number more than 1')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame();
    }else if(guess < randomNumber){
        displayMessage('Number is Tooo Low')
    } else if(guess > randomNumber){
        displayMessage('Number is Tooo High')
    }
}

function displayGuess(guess){
    userrInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrhi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userrInput.value = '';
    userrInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`
        userrInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}


