//let firstCard = parseFloat(document.getElementById("card1").value);
//let secondCard = parseFloat(document.getElementById("card2").value);
function getCard() {
let firstCard = parseInt (document.getElementById("card1").value);
let secondCard = parseInt (document.getElementById("card2").value);
return {firstCard, secondCard}
}
function sumCards() {
    const {firstCard, secondCard} = getCard();
let sum = parseInt ( firstCard + secondCard);
return  sum}
let hasBlackJack = false;
let isAlive = true;
let messageEl = document.getElementById("message");
let firstCardEl = document.getElementById("first");
let secondCardEl = document.getElementById("second");
let sumEl = document.getElementById("sum");
let otherCardEl = document.getElementById("other");
let newCardEl = document.getElementById("new");


function startGame() {
    
    let message = "";
    if (sumCards() === 21) {
        message = "black jack";
        hasBlackJack = true;
    } else if (sumCards() < 21) {
        message = "do you want to draw a new card";
    } else if (sumCards() > 21) {
        message = "your out of the game";
        isAlive = false;
    }
messageEl.textContent = message;
const {firstCard, secondCard} = getCard();
firstCardEl.textContent = "first card: " + firstCard;
secondCardEl.textContent = "second card: " + secondCard;
let sum = sumCards();

sumEl.textContent = "sum: " + sum ;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
let otherCard = Math.floor(Math.random() * 10) + 1;
let sum = sumCards();
 sum += otherCard;
otherCardEl.textContent="new card: " + otherCard;
sumEl.textContent = "sum: " + sum ;
sumCards();

    }
    else {
        newCardEl.textContent = "you cannot draw a new card";
    }

}
