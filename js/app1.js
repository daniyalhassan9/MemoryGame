/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// when user clicks on the card there has to be a way to invoke the card open show class






// close the mPopup when user clicks outside of the box

// document.getElementsByClassName("mystyle")
let Seconds = 1;
let minutes = 0;
let restartMonitor =0;

let h1 = document.querySelector('h2');
function Gametimer()
  {
    setInterval(function()
    {

      h1.innerHTML = `<p> ${minutes}:${Seconds}</p>`;

      if (Seconds != 0)
       {

        if (Seconds % 60 == 0)
        {
          Seconds = 0;
          ++minutes;
        }
      }
      Seconds++

      }, 1000);
}
function inItGame()
{
    Seconds = 0;
    minutes = 0;
    //start timer
    if (restartMonitor == 0)
    {
      Gametimer();
    }
    // get the deck element
    let deck = document.querySelector('.deck');

    // store the cards
    let cards = ['fa fa-paper-plane-o', 'fa fa-paper-plane-o',
              'fa fa-anchor', 'fa fa-anchor',
              'fa fa-bolt', 'fa fa-bolt',
              'fa fa-cube', 'fa fa-cube',
              'fa fa-leaf', 'fa fa-leaf',
              'fa fa-bicycle', 'fa fa-bicycle',
              'fa fa-diamond','fa fa-diamond',
              'fa fa-bomb','fa fa-bomb'];

    cards = shuffle(cards);
    // convert cards into html templates
   let cHTML = cardTemplate(cards);

   //converting the the array of cards in html format to a string using join and then,
   //using the innhtml property to populate the deck dynamically
   deck.innerHTML = cHTML.join('');

   if(restartMonitor==0)
   {
     restart();
   }

   main();

}


function cardTemplate(card)
{
    let cardTypes = [];

     for (i = 0; i < 16; i++)
        {
            cardTypes[i] =`<li class="card" data-card = "${card[i]}"><i class= "fa ${card[i]}"></i></li>`
             console.log(card[i]);
        }

        return cardTypes;


}

inItGame();




// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
//restart

function restart()
{
  restartMonitor++;
  restart = document.querySelector('.restart');
  restart.innerHTML = '<i class="fa fa-repeat"></i>';

  restart.addEventListener('click', function(e)
  {
    inItGame();

  });

}
// stars

function main() {

let numOfMatches = 0;

let stars = document.querySelector('.stars');
stars.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>';
// taking care of moves

let moves = 0;
movesDisplay = document.querySelector('.moves');

movesDisplay.textContent = moves;
let openCard = [];
let array = [];

let deck1 = document.querySelectorAll('.deck');
let cards = document.querySelectorAll('.card');

let j = 0;




cards.forEach(function(card){
    console.log("I am here");
    card.addEventListener('click', function(e) {


            if (moves < 3)
            {
                stars.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>';
            }
            else if (moves < 6 ) {
                stars.innerHTML = ('<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>');;
            }
            else{
                stars.innerHTML = '<li><i class="fa fa-star"></i></li><li>';
            }

        array.push(card);
       //console.log(array[j].dataset.card);

        openCard[j] = array[j].dataset.card;
        console.log(openCard[j]);

        array[j].classList.add('open', 'show');
        console.log("card" + card);

        if (openCard.length %2 == 0)
        {
            console.log("I am here");


            if (openCard[openCard.length-1] != openCard[openCard.length-2])
            {


                  setTimeout(function() {
                        console.log('hello');
                        //array[j].classList.remove('open','show');
                        card.classList.remove('open','show');
                  }, 400);

                  setTimeout(function() {
                        console.log('hello');
                        array[j-2].classList.remove('open','show');
                       // card.classList.remove('open','show');
                  }, 400);


            }
            else{

                 array[j].classList.add('match');
                 array[j].removeEventListener('click', function(e){});
                array[j-1].classList.add('match');
                numOfMatches++;

                if (numOfMatches == 8) {
                  setTimeout (function(){
                 console.log(alert("You Won"));;

               }, 400);
                }
            }
           moves++;

           if (moves < 3)
            {
                stars.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>';
            }
            else if (moves < 6 ) {
                stars.innerHTML = ('<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>');;
            }
            else{
                stars.innerHTML = '<li><i class="fa fa-star"></i></li><li>';
            }


        movesDisplay.textContent = moves;
        }




j++;



    });

});
}

//if card is clicked flip. Thinking about making an if statement for each card on grid

// let deck = document.querySelectorAll('.deck');


//var testDeck = document.getElementsByClassName('deck');
//testDeck.classList.add("card");
//console.log("Check here");
//console.log(testCards);
// let cards = document.querySelectorAll('.card');
// let ccard= document.getElementsByClassName('card').innerHTML = "";

// let cardTypes = ['fa fa-paper-plane-o', 'fa fa-paper-plane-o',
// 				'fa fa-anchor', 'fa fa-anchor',
// 				'fa fa-bolt', 'fa fa-bolt',
// 				'fa fa-cube', 'fa fa-cube',
// 				'fa fa-leaf', 'fa fa-leaf',
// 				'fa fa-bicycle', 'fa fa-bicycle',
// 				'fa fa-diamond','fa fa-diamond',
// 				'fa fa-bomb','fa fa-bomb'];

// const cardTemplate = [16];

// for (i = 0; i < 16; i++)
// {
// cardTemplate[i] =`<li class="card">
//                 <i class= ${cardTypes[i]}></i>
//             </li>`
//   }
// console.log(cardTemplate[6]);

// //let ccard= document.getElementsByClassName('card').innerHTML = cardTemplate.innerText;


// cards.forEach(function(card){
// 	console.log("I am here");
// 	card.addEventListener('click', function(e) {
// 		card.classList.add('open', 'show');
// 		console.log("hello");


// 	});

// });


// function flip(array) {

//     }



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
