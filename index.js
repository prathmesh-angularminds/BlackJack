var sum = 0;
var firstCard = Math.floor(Math.random() * 12);
var secondCard = Math.floor(Math.random() * 12);
var newCard = null;
var cards = [firstCard, secondCard];
var newElement;

/* DOM Elements */
var gameTitle = document.getElementsByClassName('BlackJack_SubTitle');
var showCards = document.getElementsByClassName('BlackJack_CardsCnt');
var sumCnt = document.getElementsByClassName('BlackJack_SumCnt');


/* Function which start new game */
function startGame() {

    displayCards();
}


/* Function which shows cards */
function displayCards() {

    // If sum is less than 21 then execute it
    if(sum < 21) {
        var finalCards = "Cards : ";

        sum = 0 ;

        // Loop for calculating sum of cards
        for(var i = 0; i < cards.length; i++) {
        
            finalCards += " " + cards[i];
            sum += cards[i];
        }

        // subtitle Message changes according to the sume value
        if(sum == 21) {
            gameTitle[0].innerText = "You Won the game!";
        } else if(sum == 21) {
            gameTitle[0].innerText = "Do You want to draw a new card?";
        } else if(sum >= 22) {
            gameTitle[0].innerText = "You lost the game!";
        }

        // Updating Dom
        showCards[0].innerText = finalCards;
        sumCnt[0].innerText = `Sum : ${sum}`;
    } 
}

/* function which adds new card */
function addNewCard() {

    newCard = Math.floor(Math.random() * 12);
    cards.push(newCard);
    displayCards();
}