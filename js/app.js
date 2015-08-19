//app.js
// X Y Position Array
var Xpos = [124, 162, 200, 238, 276];
var Ypos = [60, 143, 226];
// -- Enemy Class ----------------------------------------------------------
// Enemies our player must avoid
var Enemy = function () {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -100;
    // Randomize which line bug appears on.
    this.y = Ypos[Math.floor(Math.random() * 3)];
    // Randomize bug speed
    this.speed = Math.floor(Math.random() * 91 + 10);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + (this.speed * dt);
    // Reset bug position if off screen.
    if (this.x > 500) {
        this.x = -100;
        // Randomize which line bug appears on.
        this.y = Ypos[Math.floor(Math.random() * 3)];
    }
    // Parameters for collision detection.
    var x1 = this.x - 80;
    var x2 = this.x + 81;
    if (player.x > x1 && player.x < x2 && player.y - 8 === this.y) {
        // Got ate by bug.
        player.reset();
    }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
    // -- Player Class -----------------------------------------------------------
    // Now write your own player class
    // This class requires an update(), render() and
    // a handleInput() method.
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// -- Player Class -----------------------------------------------------------
var Player = function () {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
};
Player.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter which will ensure the game runs at the same speed for all computers.
    if (this.ctlKey === 'left' && this.x > 0) {
        this.x = this.x - 100;
    } else if (this.ctlKey === 'right' && this.x != 400) {
        this.x = this.x + 100;
    } else if (this.ctlKey === 'up') {
        this.y = this.y - 83;
    } else if (this.ctlKey === 'down' && this.y != 400) {
        this.y = this.y + 83;
    }
    // Player made it to water
    if (this.y < 0) {
        this.reset();
    }
    this.ctlKey = null;
};
// Draw the player on the screen, required method for game
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function (key) {
    this.ctlKey = key;
};
// Reset player to starting position.
Player.prototype.reset = function () {
    player.x = 200;
    player.y = 400;
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var enemy4 = new Enemy();
var enemy5 = new Enemy();
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left'
        , 38: 'up'
        , 39: 'right'
        , 40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
