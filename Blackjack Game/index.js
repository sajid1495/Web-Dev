let cards = []

let sum = 0
let hasBlackJack = false
let isAlive = false
let isStarted = false

let massageEL = document.getElementById("message-el")
let sumEL = document.querySelector("#sum-el")
let cardEL = document.querySelector("#cards-el")

let player = {
    name: "Sajid",
    chips: 1000,
}

let doller = player.chips

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + doller 



function getRandomNum() {
    let randNum = Math.floor(Math.random() * 13) + 1
    if (randNum === 1) {
        return 11
    }
    else if (randNum > 10) {
        return 10
    }
    else {
        return randNum
    }
}


function startGame() {
    if (isStarted === false) {
        isAlive = true
        hasBlackJack = false
        let firstCard = getRandomNum()
        let secondCard = getRandomNum()
        cards = [firstCard, secondCard]
        sum = cards[0] + cards[1]
        renderGame()
    }
}

function renderGame() {
    sumEL.textContent = "Sum: " + sum
    cardEL.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEL.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
        isStarted = true
        playerEl.textContent = player.name + ": $" + doller
    }
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
        isStarted = false
        doller += 100
        playerEl.textContent = player.name + ": $" + doller
    }
    else {
        message = "You're out of the game! 😭"
        isAlive = false
        isStarted = false
        doller -= 100
        playerEl.textContent = player.name + ": $" + doller
    }
    massageEL.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomNum()
        cards.push(card)
        sum += card
        renderGame()
    }
}


