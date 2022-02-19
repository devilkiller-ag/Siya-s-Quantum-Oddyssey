/*
Author: Ashmit JaiSarita Gupta
Date: 19-02-2022
*/

//Importing some utility functions
import utils from './utils.js';

// Import Images to Be Used In Game
import platform from '../img/platform.png';
import hills from '../img/hills.png';
import platformSmallTall from '../img/platformSmallTall.png';

const canvas = document.querySelector('canvas'); // To store canvas element of DOM in a constant
const c = canvas.getContext('2d'); //Canvas element method to obtain the rendering context and its drawing functions for 2D Graphics.

let scoreEl = document.querySelector('#score-el')

canvas.width = innerWidth; // Setting canvas width to windows width
canvas.height = innerHeight; // Setting canvas height to windows height

addEventListener('resize', function() {
  // Resetting canvas size when window is resized
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});
const gravity = 0.6; // Gravity acting on Player/Enemy

// Player class for blueprint of our player
class Player {
  // Initializing/Setting properties of our player
  constructor() {
    this.speed = 10; // Player Speed
    this.position = {
      // Initial rendering position of our player
      x: 100,
      y: 100
    };
    this.velocity = {
      // Initial velocity of player
      x: 0,
      y: 0
    };
    this.width = 30; // Player(initially a square box) width
    this.height = 30; // Player(initially a square box) width
  }

  // Let's draw our player on canvas
  draw() {
    c.fillStyle = 'red'; // Player(Box) Color
    //Draw a filled rectangle (square in our case)
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  // Updating our player properties on canvas as it moves
  update() {
    // Drawing our player on canvas
    this.draw();

    // Updating our player position
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Updating velocity in y direction due to gravity when player is inside our canvas
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    }
  }
}

// Platform class for blueprint of platform
class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x, // same as x: x
      y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

// Generic Object class for blueprint of Generic Objects(Background Image, Hills)
class GenericObject {
  constructor({ x, y, image }) {
    this.position = {
      x, // same as x: x
      y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

// Using this kind instead of class for ministars and stars so that each star object don't need to d=have their own draw and update method. instead they use one. Also permonce gets enhanced.

function Star(x, y, radius, color) {
  this.position = {
    x,
    y
  };
  (this.radius = radius), (this.color = color);
  this.velocity = {
    x: utils.randomIntFromRange(-4, 4),
    y: 3
  };
  this.gravity = 0.3;
  this.friction = 0.8;
}
Star.prototype.draw = function() {
  c.save(); //Using save() and restore() show that the glow property only apply to stars and not other cancas element
  c.beginPath(); // Start drawing path
  c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false); // Draw Circle
  c.fillStyle = this.color;
  c.shadowColor = `#E3EAEF`; // Glow Color
  c.shadowBlur = 20;
  c.fill(); // Fill the Circle
  c.closePath(); // End drawing
  c.restore();
};
Star.prototype.update = function() {
  this.draw();

  //When ball hits bottom of screen
  if (this.position.y + this.radius + this.velocity.y > canvas.height) {
    this.velocity.y = -this.velocity.y * this.friction;
    this.shatter(4);
  } else {
    this.velocity.y += this.gravity;
  }

  this.position.x += this.velocity.x;
  this.position.y += this.velocity.y;
};
Star.prototype.shatter = function(n) {
  // Star should shatter into 'n' ministars when star hits the floor
  // decreasing the radius of star each time it hits the floor so that new ministars are not rendered again and again
  this.radius -= 3;
  for (let i = 0; i < n; i++) {
    miniStars.push(new MiniStar(this.position.x, this.position.y, 2));
  }
  // console.log(miniStars);
};

function MiniStar(x, y, radius, color) {
  Star.call(this, x, y, radius, color);
  this.velocity = {
    x: utils.randomIntFromRange(-5, 5),
    y: utils.randomIntFromRange(-15, 15)
  };
  this.gravity = 0.1;
  this.friction = 0.8;
  this.ttl = 100; // ttl: time to live - for how many frames should this stars live for
  this.opacity = 1;
}
MiniStar.prototype.draw = function() {
  c.save();
  c.beginPath(); // Start drawing path
  c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false); // Draw Circle
  c.fillStyle = `rgba(227, 234, 239, ${this.opacity})`;
  c.shadowColor = `#E3EAEF`; // Glow Color
  c.shadowBlur = 20;
  c.fill(); // Fill the Circle
  c.closePath(); // End drawing
  c.restore();
};
MiniStar.prototype.update = function() {
  this.draw();

  //collision with floor
  if (this.position.y + this.radius + this.velocity.y > canvas.height) {
    this.velocity.y = -this.velocity.y * this.friction;
  } else {
    this.velocity.y += this.gravity;
  }

  // Movement
  this.position.x += this.velocity.x;
  this.position.y += this.velocity.y;

  this.ttl -= 1;
  this.opacity -= 1 / this.ttl; // To decrease opacity
};

// Creating attack balls (representing qubits)
class Qubit {
  constructor(x, y, radius, x_vel, color) {
    this.position = {
      x,
      y
    };
    this.velocity = {
      x: x_vel,
      y: 0
    };
    (this.radius = radius), (this.color = color);
  }
  draw() {
    c.beginPath();
    c.fillStyle = this.color;
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true);
    c.fill();
    c.closePath();
  }
  update() {
    this.draw();

    this.position.x += this.velocity.x;
  }
}

// Creating Image Object and returning it to be drawn on canvas from the specified source
function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}

// Background Gradient Object
const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);
backgroundGradient.addColorStop(0, '#171e26');
backgroundGradient.addColorStop(1, '#3f586b');

// Creating Platfrom Image
let platformImage = createImage(platform);
let platformSmallTallImage = createImage(platformSmallTall);

// Creating Object Of Player
let player = new Player();

// Array to store platforms
let platforms = [];

// Array to store generic objects
let genericObjects = [];

// Array to store stars
let stars = [];
let miniStars = [];
let backgroundStars = [];

// Array to store enemy qubits
let enemyQubits = [];
// Array to store player qubits
let playerQubits = [];

// time-counter for spawning stars when it is divisible by certain random number
let ticker = 0;
let randomStarSpawnRate = 150;
let randomEnemyQubitSpawnRate = 700;

// Array to store colors of qubit representing diffrent states of qubit
let qubitColors = [ 'white', 'black', '#A6A6A6' ]; // white - 0, black - 1, #A6A6A6 - Grey - H|0> - Superposition

// keys Object to store of keys pressed or not (initially keys are not pressed so false)
const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  up: {
    pressed: false
  }
};

let scrollOffset = 0; // To keep record of how far the player is from the origin in x-direction

let score = 0

// Initialising function for initial drawing/ressetting everything
function init() {
  platformImage = createImage(platform);

  player = new Player();

  // Creating objects of platforms and drawing them at different location
  platforms = [
    new Platform({
      x: platformImage.width * 4 + 9,
      y: 350,
      image: platformSmallTallImage
    }),
    new Platform({
      x: -1,
      y: 560,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width - 3,
      y: 560,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width * 2 + 150,
      y: 560,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width * 3 + 300,
      y: 560,
      image: platformImage
    }),
    new Platform({
      x: platformImage.width * 4 + 900,
      y: 560,
      image: platformImage
    })
  ];

  // Creating objects of generic objects and drawing them at different location
  genericObjects = [
    new GenericObject({
      x: -1,
      y: 100,
      image: createImage(hills)
    })
  ];

  // Creating background stars
  for (let i = 0; i < 45; i++) {
    // Creating random state for background stars
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 3;

    backgroundStars.push(new Star(x, y, radius, 'white'));
  }

  scrollOffset = 0;
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate); //Repeatedly creates an animation by executing code( inside animate() ) again and again as user makes changes to screen

  // Resetting our canvas color
  c.fillStyle = backgroundGradient;
  c.fillRect(0, 0, canvas.width, canvas.height);

  // Drawing elements of backgroundStars array on screen
  backgroundStars.forEach((backgroundStar) => {
    backgroundStar.draw();
  });

  // Drawing elements of genericOjects array on screen
  genericObjects.forEach((genericObject) => {
    genericObject.draw();
  });

  // Drawing elements of platforms array on screen
  platforms.forEach((platform) => {
    platform.draw();
  });

  // Drawing elements of stars array on screen
  stars.forEach((star, index) => {
    star.update();
    if (star.radius == 1) {
      stars.splice(index, 1); // remove 1 star at the 'index' in stars array when the radius of this star is zero.
    }
  });
  // Drawing elements of miniStars array on screen
  miniStars.forEach((miniStar, index) => {
    miniStar.update();
    if (miniStar.ttl == 0) {
      miniStars.splice(index, 1); // remove 1 ministar at the 'index' in ministars array after it lived for 'ttl' frames
    }
  });

  ticker++;

  if (ticker % randomStarSpawnRate == 0) {
    const radius = 10;
    const x = Math.max(Math.random() * canvas.width - radius);
    stars.push(new Star(x, -100, radius, 'white'));
    randomStarSpawnRate = utils.randomIntFromRange(150, 200);
  }

  // Creating enemy qubits
  if (ticker % randomEnemyQubitSpawnRate == 0) {
    const x = canvas.width + 100;
    const y = player.position.y + player.height / 2;
    const radius = 12;
    const x_vel = -15;
    const color = qubitColors[utils.randomIntFromRange(0, 2)];
    enemyQubits.push(new Qubit(x, y, radius, x_vel, color));
    randomEnemyQubitSpawnRate = utils.randomIntFromRange(300, 400);
  }

  // Drawing elements of enemyQubits array on screen
  enemyQubits.forEach((enemyQubit, index) => {
    enemyQubit.update();

    // Deleting enemy qubit when it reaches left side of canvas
    if (enemyQubit.position.x + enemyQubit.radius <= 0) {
      setTimeout(() => {
        enemyQubits.splice(index, 1);
      }, 0)
    }

    // Player Qubit vs. enemy Qubit
    playerQubits.forEach((playerQubit, indexPQ) => {
      if(playerQubit.position.x + playerQubit.radius >= enemyQubit.position.x - enemyQubit.radius && 
        playerQubit.position.y === enemyQubit.position.y) {
        score += 100
        scoreEl.innerHTML = score
        setTimeout(() => {
          enemyQubits.splice(index, 1)
          playerQubits.splice(indexPQ, 1)
        }, 0)
      }
    })

    // Loose condition 2: Enemy Qubit hits Player
    if(player.position.y === enemyQubit.position.y && player.position.x + player.width >= enemyQubit.position.x - enemyQubit.radius) {
      console.log('lost due to hit')
    }
  });

  // Drawing elements of playerQubits array on screen
  playerQubits.forEach((playerQubit, index) => {
    playerQubit.update();

    // Deleting player qubit when it reaches left side of canvas
    if (playerQubit.position.x - playerQubit.radius >= canvas.width) {
      setTimeout(() => {
        playerQubits.splice(index, 1);
      })
    }
  });

  // updating our player
  player.update();

  if (
     (keys.right.pressed && player.position.x < 0.75 * canvas.width)|| 
     (keys.right.pressed && scrollOffset === 2930 && player.position.x > 0) // So that scrren don't mobe more right when win position is reached
  ) {
    player.velocity.x = player.speed;
  } else if (
    (keys.left.pressed && player.position.x > 0.1 * canvas.width) ||
    (keys.left.pressed && scrollOffset === 0 && player.position.x > 0) // So that scrren don't move more left at scrollOfset = 0
  ) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach((platform) => {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach((genericObject) => {
        genericObject.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach((platform) => {
        platform.position.x += player.speed;
      });

      genericObjects.forEach((genericObject) => {
        genericObject.position.x += player.speed * 0.66;
      });
    }
  }

  // Roof Collision
  if (player.position.y + player.velocity.y - 10 <= 0) {
    player.velocity.y = 15;
  }

  // platform collision detection
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y /* For making player stop above platform */ &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y /* For making it stop only when it hits the platform */ &&
      player.position.x + player.width >=
        platform.position.x /* For making it fall when its on left side of pltform  */ &&
      player.position.x <= platform.position.x + platform.width
    ) {
      /* For making it fall when its on left side of pltform  */
      player.velocity.y = 0;
    }
  });

  // Win Codition
  if (scrollOffset > platformImage.width * 4 + 500) {
    console.log('Win');
  }

  // Lose Condition - 1: Death Pit
  if (player.position.y > canvas.height) {
    // Resetting stars array so that previous stars clear away when level is re-played after death
    stars = [];
    // miniStars = []
    console.log('You Lose');
    init();
  }
}
init();
animate();

addEventListener('keydown', ({ keyCode }) => {
  // console.log(keyCode)
  switch (keyCode) {
    //Movement
    case 37:
      // console.log('Left Keydown');
      keys.left.pressed = true;
      break;
    case 39:
      // console.log('Right Keydown');
      keys.right.pressed = true;
      break;
    case 38:
      // console.log('Up Keydown');
      keys.up.pressed = true;
      player.velocity.y -= 15;
      break;
    case 40:
      // console.log('Down Keydown');
      break;

    // Qubit Spawning
    case 81: // q: spawning qubit |0>
      const x_white = player.position.x + player.width + 12;
      const y_white = player.position.y + player.height / 2;
      const radius_white = 12;
      const color_white = 'white';
      const x_vel_white = 15;
      playerQubits.push(new Qubit(x_white, y_white, radius_white, x_vel_white, color_white));
      // console.log(playerQubits);
      break;
    case 88: // q: spawning qubit |1>
      const x_black = player.position.x + player.width + 12;
      const y_black = player.position.y + player.height / 2;
      const radius_black = 12;
      const color_black = 'black';
      const x_vel_black = 15;
      playerQubits.push(new Qubit(x_black, y_black, radius_black, x_vel_black, color_black));
  }
});

addEventListener('keyup', ({ keyCode }) => {
  // console.log(keyCode)
  switch (keyCode) {
    case 37:
      // console.log('Left Keyup');
      keys.left.pressed = false;
      break;
    case 39:
      // console.log('Right Keyup');
      keys.right.pressed = false;
      break;
    case 38:
      // console.log('Up Keyup');
      break;
    case 40:
      // console.log('Down Keyup');
      break;
  }
});