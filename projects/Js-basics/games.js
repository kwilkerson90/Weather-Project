 const computerChoiceDisplay = document.getElementById('computer-choice')
 const userChoiceDisplay = document.getElementById('user-choice')
 const resultDisplay = document.getElementById('result')
 const possibleChoices = document.querySelectorAll('button')
 let userChoice
 let computerChoice
 let result

 possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
     userChoice = e.target.id
     userChoiceDisplay.innerHTML = userChoice
     generateComputerChoice()
     getResult()
 }))

 function generateComputerChoice() {
     const randomNumber = Math.floor(Math.random() * 3) + 1// or you can use possibleChoices.length
    
     if (randomNumber === 1) {
         computerChoice = 'rock'
     }
     if (randomNumber === 2) {
         computerChoice = 'scissors'
     }
     if (randomNumber === 3) {
         computerChoice = 'paper'
     }
     computerChoiceDisplay.innerHTML = computerChoice
 }

 function getResult() {
     if (computerChoice === userChoice) {
         result = 'its a draw!'
     }
     if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you got it'
     }
     if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'just take the L'
     }
     if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you be killin em'
     }   
     if (computerChoice === 'paper' && userChoice === "rock") {
         result = 'sorry not sorry'
     }
     if (computerChoice === 'scissors' && userChoice === "rock") {
         result = 'must be nice'
     }
     if (computerChoice === 'scissors' && userChoice === "paper") {
         result = 'if youre not first, youre last'
     }
     resultDisplay.innerHTML = result
    }