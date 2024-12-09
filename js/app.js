/*--------------------------- Minimum Requirements ------------------------------*/

// // Display an empty tic-tac-toe board when the page is initially displayed.
// // A player can click on the nine cells to make a move.
// // Every click will alternate between marking an X and O.
// Display whose turn it is (X or O).
// // The cell cannot be played again once occupied with an X or O.
// Provide win logic and display a winning message.
// Provide logic for a cat’s game (tie), also displaying a message.
// // Provide a Reset Game button that will clear the contents of the board.



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

const gameStates = [
    'reset',
    'in play',
    'completed'
];

// squares # identification
// squares.forEach((square) => {
//     square.innerText = square.id;
// })

// for win case
// if either X or O has three-in-a-row
// 8 ways to make it:
// horizontal:
//      row 1, spaces 0, 1, 2
//      row 2, spaces 3, 4, 5
//      row 3, spaces 6, 7, 8
// vertical:
//      column a, spaces 0, 3, 6
//      column b, spaces 1, 4, 7
//      column c, spaces 2, 5, 8
// diagonal:
//      \, spaces 0, 4, 8
//      /, spaces 2, 4, 6

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



/*---------------------------- Variables (state) ----------------------------*/



// turn variable will be either x or y
let turn = "";
turn = 'x'; // temporary testing

// making gameState an integer is unnecessary although easier to work with IMO
let gameState = 0; // reset

let emptyCount = 0;


/*------------------------ Cached Element References ------------------------*/

const message = document.querySelector('#message');

const resetButton = document.querySelector('#reset');

// creates an array of all 9 squares
const squares = document.querySelectorAll('.sqr');
// console.dir(squares);
// console.dir(squares[0]);
// console.log(squares[0].id);
// each square's index is the same as its ID



/*----------------------------- Event Listeners -----------------------------*/

// creates event listeners for clicking on all 9 squares
squares.forEach((square) => {
    square.addEventListener('click', (event) => {
        // console.log(event.target.id);
        if (event.target.innerText === "" && gameState !== 2) {
            placeMarker(event.target.id, turn);
            nextTurn();
        }
    })
})

resetButton.addEventListener('click', (event) => {
    resetGame();
});



/*-------------------------------- Functions --------------------------------*/

const placeMarker = (index, marker) => {
    squares[index].innerText = marker;
}
// placeMarker(1, 'x');

const resetGame = () => {
    squares.forEach((square) => {
        square.innerText = "";
    })
    gameState = 0;
    console.log(`game is ${gameStates[gameState]}`)
    turn = 'x';
    message.innerText = "New game, x's turn";
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
    message.innerText = `${turn}'s turn`
    emptyCounter();
    console.log(`${emptyCount} empty squares remain`);
    
    // check for win condition
    winCheck();

    // check for completed game
    if (emptyCount === 0) {
        catsGame();
    }
}

// there are better ways of doing this, but this works
const emptyCounter = () => {
    emptyCount = 0;
    for (let i = 0; i < 9; i++) {
        if (squares[i].textContent === "") {
            emptyCount++;
        }
    }
}
// improvement: make this with reduce() or forEach() or some other array method



const catsGame = () => {
    gameState = 2;
    console.log(`game is ${gameStates[gameState]}`)
    message.innerText = `Cats game, tied! Better luck next time.`;
}




/*-------------------------------- Win Conditions --------------------------------*/




const winCheck = () => {
    winConditions.forEach((set) => {
        if (squares[set[0]].innerText === squares[set[1]].innerText && squares[set[0]].innerText === squares[set[2]].innerText && squares[set[0]].innerText !== "") {
            gameState = 2;
            console.log(`${squares[set[0]].innerText} has won; game is ${gameStates[gameState]}`);
            message.innerText = `${squares[set[0]].innerText} has won`
        }
    })
}