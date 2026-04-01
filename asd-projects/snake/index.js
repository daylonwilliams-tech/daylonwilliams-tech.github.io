/* global $, sessionStorage*/

////////////////////////////////////////////////////////////////////////////////
///////////////////////// VARIABLE DECLARATIONS ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
console.log("top");
// HTML jQuery Objects
var board = $("#board");
var scoreElement = $("#score");
var highScoreElement = $("#highScore");

// Game Variables
var score = 0; // variable to keep track of the score
var started = false; // variable to keep track of whether the game has started
// TODO 4, Part 1: Create the apple variable
var apple = {};

// TODO 5, Part 1: Create the snake variable
const snake = {};
var colors = ["pastel red", "pastel pink", "pastel green", "orange", " pastel purple"];
var colorIndex = 0;
var colorIndex = 0;
// Constant Variables
var ROWS = 20;
var COLUMNS = 20;
var SQUARE_SIZE = 20;
var KEY = {
LEFT: 37,
UP: 38,
RIGHT: 39,
DOWN: 40,
};

// interval variable required for stopping the update function when the game ends
var updateInterval;

// variable to keep track of the key (keycode) last pressed by the user
var activeKey;

////////////////////////////////////////////////////////////////////////////////
////////////////////////////// GAME SETUP //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// TODO: turn on keyboard inputs
$("body").on("keydown", handleKeyDown);

// start the game
init();

function init() {
// TODO 5, Part 2: initialize the snake
snake.body = [];
makeSnakeSquare(10, 10);
makeSnakeSquare(10, 9);
makeSnakeSquare(10, 8);
snake.head = snake.body[0];

// TODO 4, Part 3: initialize the apple
makeApple();

// TODO 6, Part 1: Initialize the interval
updateInterval = setInterval(update, 100);
}

////////////////////////////////////////////////////////////////////////////////
///////////////////////// PROGRAM FUNCTIONS ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
* On each update tick update the snake's position and check for
* collisions with the walls.
*/
function update() {
console.log("updated");
// TODO 6, Part 2: Fill in the update function's code block
if (started) {
moveSnake();
} 
