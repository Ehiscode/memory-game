const cardArray = [
    {
    name : 'cheeseburger',
    Image: 'images/cheeseburger.png', 
    // Id: 0
    },
    {
    name : 'fries',
    Image: 'images/fries.png', 
    // Id: 1
    },
    {
    name : 'hotdogs',
    Image: 'images/hotdog.png',
    // Id: 2
    },
    {
    name : 'ice-cream',
    Image: 'images/ice-cream.png',
    // Id: 3
    },
    {
    name : 'milkshake',
    Image: 'images/milkshake.png',
    // Id: 4
    },
    {
    name : 'pizza',
    Image: 'images/pizza.png',
    // Id: 5
    },
    {
    name : 'cheeseburger',
    Image: 'images/cheeseburger.png',
    // Id: 6
    },
    {
    name : 'fries',
    Image: 'images/fries.png',
    // Id: 7
    },
    {
    name : 'hotdogs',
    Image: 'images/hotdog.png',
    // Id: 8
    },
    {
    name : 'ice-cream',
    Image: 'images/ice-cream.png',
    // Id: 9
    },
    {
    name : 'milkshake',
    Image: 'images/milkshake.png',
    // Id: 10
    },
    {
    name : 'pizza',
    Image: 'images/pizza.png',
    // Id: 11
    }
]

//sort array randomly
cardArray.sort(()=> 0.5 - Math.random())
console.log(cardArray);
const gridDisplay = document.querySelector('#grid')
let cardChosen = [];
let cardChosenIds = [];
const cardsWon = []
const resultDislay = document.querySelector('#result')



function resetGame() {
    cardChosen = [];
    cardChosenIds = []
}
function checkMatch() {
    const card = document.querySelectorAll('img')
    

    //if you click on the same image
    if(cardChosenIds[0] === cardChosenIds[1]) {
        card[cardChosenIds[0]].setAttribute('src', './images/blank.png');
        resetGame()
        return;
        // card[cardChosenIds[1]].setAttribute('src', 'images/blank.png');
        // alert('you have clicked the same card')
    }
    if(cardsWon.some(pair => 
        pair.includes(cardChosen[0]) &&
        pair.includes(cardChosen[1]))) {
            alert('these cards have been matched before');
            return;
        }

    if(cardChosen[0] === cardChosen[1]) {
        alert('YOU HAVE FOUND A MATCH')
        card[cardChosenIds[0]].setAttribute('src', 'images/white.png');
        card[cardChosenIds[1]].setAttribute('src', 'images/white.png');
        card[cardChosenIds[0]].removeEventListener('click', flipCard)
        card[cardChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen) //push a pair of the same chosen cards into the cardsWon array
    } else {
        card[cardChosenIds[0]].setAttribute('src', 'images/blank.png');
        card[cardChosenIds[1]].setAttribute('src', 'images/blank.png');       
    }


    cardChosen = []
    cardChosenIds = []
    resultDislay.innerHTML = cardsWon.length
    // console.log(cardChosen)
    console.log(cardsWon);
    console.log(cardsWon.length);


    if(cardsWon.length === cardArray.length/2) {
        resultDislay.innerHTML = 'YOU HAVE FOUND \'EM ALL'
    }
}

//create card board
function createBoard() {
    cardArray.forEach((card, i) => { //using i makes the numbers - removing randomisez the numbers
        const newCard = document.createElement('img')
        newCard.setAttribute('src', 'images/blank.png');
        newCard.setAttribute('data-id', i) //id of each card(item) in the array
        newCard.addEventListener('click', flipCard)
        gridDisplay.appendChild(newCard)
        console.log(newCard);
})
}
createBoard()


//flip card function
function flipCard() {
    console.log(cardArray);
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].Image)

    if(cardChosen.length === 2) {
        setTimeout(checkMatch, 200)
    }
    console.log(cardChosen); //names of the images in the cards chosen (ARRAY)
    console.log(cardChosenIds); //the ARRAY of the ids of the cards chosen
    console.log(cardId); // the ids
}










