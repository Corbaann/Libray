const readline = require('readline-sync');

const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = [
    { name: 'Ace', value: 11 },
    { name: '2', value: 2 },
    { name: '3', value: 3 },
    { name: '4', value: 4 },
    { name: '5', value: 5 },
    { name: '6', value: 6 },
    { name: '7', value: 7 },
    { name: '8', value: 8 },
    { name: '9', value: 9 },
    { name: '10', value: 10 },
    { name: 'Jack', value: 10 },
    { name: 'Queen', value: 10 },
    { name: 'King', value: 10 }
];

function createDeck() {
    const deck = [];
    for (const suit of suits) {
        for (const rank of ranks) {
            deck.push({ suit, name: rank.name, value: rank.value });
        }
    }
    return deck;
}

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function handValue(hand) {
    let value = hand.reduce((sum, card) => sum + card.value, 0);
    let aces = hand.filter(card => card.name === 'Ace').length;
    while (value > 21 && aces > 0) {
        value -= 10;
        aces--;
    }
    return value;
}

function printHand(hand, owner) {
    console.log(`${owner} hand: ${hand.map(card => `${card.name} of ${card.suit}`).join(', ')} (Value: ${handValue(hand)})`);
}

function blackjack() {
    const deck = createDeck();
    shuffle(deck);

    const playerHand = [deck.pop(), deck.pop()];
    const dealerHand = [deck.pop(), deck.pop()];

    printHand(playerHand, 'Player');
    console.log(`Dealer shows: ${dealerHand[0].name} of ${dealerHand[0].suit}`);

    // Player turn
    let playerDone = false;
    while (!playerDone) {
        if (handValue(playerHand) >= 21) break;
        const choice = prompt('Hit or Stand? (h/s)').toLowerCase();
        if (choice === 'h') {
            playerHand.push(deck.pop());
            printHand(playerHand, 'Player');
        } else if (choice === 's') {
            playerDone = true;
        }
    }

    // Dealer turn
    printHand(dealerHand, 'Dealer');
    while (handValue(dealerHand) < 17) {
        dealerHand.push(deck.pop());
        printHand(dealerHand, 'Dealer');
    }

    // Results
    const playerTotal = handValue(playerHand);
    const dealerTotal = handValue(dealerHand);

    if (playerTotal > 21) {
        console.log('Player busts! Dealer wins.');
    } else if (dealerTotal > 21) {
        console.log('Dealer busts! Player wins.');
    } else if (playerTotal > dealerTotal) {
        console.log('Player wins!');
    } else if (playerTotal < dealerTotal) {
        console.log('Dealer wins!');
    } else {
        console.log('Push! It\'s a tie.');
    }
}

// For Node.js, use readline-sync for prompt
if (typeof prompt === 'undefined') {
    global.prompt = readline.question;
}

blackjack();