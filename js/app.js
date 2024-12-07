/*--------------------------- Minimum Requirements ------------------------------*/

// Display an empty tic-tac-toe board when the page is initially displayed.
// A player can click on the nine cells to make a move.
// Every click will alternate between marking an X and O.
// Display whose turn it is (X or O).
// The cell cannot be played again once occupied with an X or O.
// Provide win logic and display a winning message.
// Provide logic for a cat’s game (tie), also displaying a message.
// Provide a Reset Game button that will clear the contents of the board.



/*-------------------------------- Notes -----------------------------------*/

// Using id/class attributes to target elements for styling and click event listeners.
// These have already been added for you in this lab!
// Programs, including games, frequently focus on manipulating and displaying that data to a user
// Decide on the data structures held in variables you will use to maintain the game’s state (its current data or status).
// Lots of little functions with small jobs help accomplish big things!



/*-------------------------------- Psuedocode --------------------------------*/

// 1) Define the required variables used to track the state of the game.

// 2) Store cached element references.

// 3) Upon loading, the game state should be initialized, and a function should be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Define the required constants.

// 6) Handle a player clicking a square with a `handleClick` function.

// 7) Create Reset functionality.




/*-------------------------------- Constants --------------------------------*/

// creating play field as a 2-dimensional array... MBCU
// const playField = new Array(3);
// for (let y = 0; y<3; y++) {
//     playField[y] = new Array(3);
// }
// console.log(playField);

const gameStates = [
    'reset',
    'in play',
    'completed'
];





/*---------------------------- Variables (state) ----------------------------*/

// turn variable will be either x or y
let turn = "";
turn = 'x'; // temporary testing

// making gameState an integer is unnecessary although easier to work with IMO
let gameState = 0;




/*------------------------ Cached Element References ------------------------*/

// creates an array of all 9 squares
const squares = document.querySelectorAll('.sqr');
// console.dir(squares);
// console.dir(squares[0]);
// console.log(squares[0].id);
// each square's index is the same as its ID




const resetButton = document.querySelector('#reset');
// console.dir(resetButton);


/*----------------------------- Event Listeners -----------------------------*/

// creates event listeners for clicking on all 9 squares
squares.forEach((square) => {
    square.addEventListener('click', (event) => {
        // console.log(event.target.id);
        if (event.target.innerText === "") {
            placeMarker(event.target.id, turn);
            nextTurn();
        }
    })
})

resetButton.addEventListener('click', (event) => {
    resetField();
});



/*-------------------------------- Functions --------------------------------*/

const placeMarker = (index, marker) => {
    squares[index].innerText = marker;
}
// placeMarker(1, 'x');

const resetField = () => {
    squares.forEach((square) => {
        square.innerText = "";
    })
}

const nextTurn = () => {
    if (turn === 'x') {
        turn = 'o';
    } else if (turn === 'o') {
        turn = 'x';
    } else {
        console.log('whose turn is it anyway?');
    }
    console.log(`it is now ${turn}'s turn`);
}


