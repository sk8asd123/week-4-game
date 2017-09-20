// set random max health so game is not static
function randomHealth() {
    var max_health = 100;
    return Math.floor(Math.random()*max_health) + 1;
}

var characterOne = {name: "one", health_points: "100", attack_power: "1", counter_attack_power: "2"};
var characterTwo = {name: "two", health_points: "100", attack_power: "1", counter_attack_power: "2"};
var characterThree = {name: "three", health_points: "100", attack_power: "1", counter_attack_power: "2"};
var characterFour = {name: "four", health_points: "100", attack_power: "1", counter_attack_power: "2"};

function Player(type) {
    this.type = type;
}

var attackingPlayer = new Player("attack");
var defendingPlayer = new Player("defend");

//setup action handlers
