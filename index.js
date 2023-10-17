const cardArray = [
    {
    name : 'fries',
    Image : 'images/fries.png'
    },
    {
    name : 'cheeseburger',
    Image : 'images/cheeseburger.png'
    },  
    {
    name : 'hotdog',
    Image : 'images/hotdog.png'
    },
    {
    name : 'ice-cream',
    Image : 'images/ice-cream.png'
    },
    {
    name : 'milkshake',
    Image : 'images/milkshake.png'
    },
    {
    name : 'pizza',
    Image : 'images/pizza.png'
    },
    {
    name : 'fries',
    Image : 'images/fries.png'        
    },
    {
    name : 'cheeseburger',
    Image : 'images/cheeseburger.png'
    },  
    {
    name : 'hotdog',
    Image : 'images/hotdog.png'
    },
    {
    name : 'ice-cream',
    Image : 'images/ice-cream.png'
    },
    {
    name : 'milkshake',
    Image : 'images/milkshake.png'
    },
    {
    name : 'pizza',
    Image : 'images/pizza.png'
    }
    
]
//sort cards in the grid randomly
cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray)
const gridDisplay = document.querySelector('#grid')
const resultDislay = document.querySelector('#result')
let cardChosen = [] //push in the elements selected into an array
let cardChosenIds = []
const cardsWon = []
function checkMatch() {
const cards = document.querySelectorAll('img')


    //if you clck on the same image
    if(cardChosenIds[0] == cardChosenIds[1]) 
        cards[cardChosenIds[0]].setAttribute('src', 'images/blank.png');       
        cards[cardChosenIds[1]].setAttribute('src', 'images/blank.png');       
    {
        // alert('you have clicked the same card')
    }
    //if match is found
    if(cardChosen[0] == cardChosen[1]) {
        alert('You have found a match')
        cards[cardChosenIds[0]].setAttribute('src', 'images/white.png');       
        cards[cardChosenIds[1]].setAttribute('src', 'images/white.png');      
        cards[cardChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardChosenIds[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardChosen)
    } else {
        cards[cardChosenIds[0]].setAttribute('src', 'images/blank.png');       
        cards[cardChosenIds[1]].setAttribute('src', 'images/blank.png');       
        alert('sorry try again')
        
    }
    resultDislay.textContent = cardsWon.length
    console.log(cardsWon.length);
    cardChosen = [] //start the whole process again
    cardChosenIds = [] //reset

    if(cardsWon.length == cardArray.length /2) {
        resultDislay.textContent = 'YOU HAVE FOUND \'EM ALL'
    }
}

//create card board
function createBoard() {
 //for each item in my card array, i want to create an element
 for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i) //#important
    card.addEventListener('click', flipCard)
    //create card
    gridDisplay.appendChild(card) //appendChild => to add an element
    console.log(card)
 }   
}
createBoard()

//flip the card
function flipCard() {
    console.log(cardArray)
    const cardId = this.getAttribute('data-id') //this => the exact image that is being clicked
    console.log(cardArray[cardId].name)
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    //setting the image of the card clicked to the exact image
    this.setAttribute('src', cardArray[cardId].Image)
    if(cardChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
    console.log(cardChosen);
    console.log(cardId)
    console.log(cardChosenIds);
}













