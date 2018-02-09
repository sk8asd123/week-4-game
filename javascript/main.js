var crystal = {
    first:
        {
            name: "first",
            value: 0
        },
    second:
        {
            name: "second",
            value: 0
        },
    third:
        {
            name: "third",
            value: 0
        }
};

// Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;



var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Starts the Game (and restarts the game)
var startGame = function() {
    currentScore = 0;
    targetScore = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

    crystal.first.value = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    crystal.second.value = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    crystal.third.value = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    $("#your-score").html(currentScore);
    $("#guess-score").html(targetScore);
};

var check = function() {
    if (currentScore > targetScore) {
        alert("Game Over!");
        startGame();
    }

    else if (currentScore === targetScore) {
        alert("You Win");
        startGame();
    }
};

var addValues = function(clickedCrystal) {
    currentScore += clickedCrystal.value;
    $("#your-score").html(currentScore);
    check();
};

startGame();

$("#first").click(function() {
    addValues(crystal.first);
});

$("#second").click(function() {
    addValues(crystal.second);
});

$("#third").click(function() {
    addValues(crystal.third);
});
