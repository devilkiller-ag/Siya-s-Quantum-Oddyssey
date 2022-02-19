/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Author: Ashmit JaiSarita Gupta
Date: 19-02-2022
*/
//Importing some utility functions
 // Import Images to Be Used In Game




var canvas = document.querySelector('canvas'); // To store canvas element of DOM in a constant

var c = canvas.getContext('2d'); //Canvas element method to obtain the rendering context and its drawing functions for 2D Graphics.

var scoreEl = document.querySelector('#score-el');
canvas.width = innerWidth; // Setting canvas width to windows width

canvas.height = innerHeight; // Setting canvas height to windows height

addEventListener('resize', function () {
  // Resetting canvas size when window is resized
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});
var gravity = 0.6; // Gravity acting on Player/Enemy
// Player class for blueprint of our player

var Player = /*#__PURE__*/function () {
  // Initializing/Setting properties of our player
  function Player() {
    _classCallCheck(this, Player);

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
  } // Let's draw our player on canvas


  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = 'red'; // Player(Box) Color
      //Draw a filled rectangle (square in our case)

      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    } // Updating our player properties on canvas as it moves

  }, {
    key: "update",
    value: function update() {
      // Drawing our player on canvas
      this.draw(); // Updating our player position

      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y; // Updating velocity in y direction due to gravity when player is inside our canvas

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      }
    }
  }]);

  return Player;
}(); // Platform class for blueprint of platform


var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      // same as x: x
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}(); // Generic Object class for blueprint of Generic Objects(Background Image, Hills)


var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      // same as x: x
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}(); // Using this kind instead of class for ministars and stars so that each star object don't need to d=have their own draw and update method. instead they use one. Also permonce gets enhanced.


function Star(x, y, radius, color) {
  this.position = {
    x: x,
    y: y
  };
  this.radius = radius, this.color = color;
  this.velocity = {
    x: _utils_js__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-4, 4),
    y: 3
  };
  this.gravity = 0.3;
  this.friction = 0.8;
}

Star.prototype.draw = function () {
  c.save(); //Using save() and restore() show that the glow property only apply to stars and not other cancas element

  c.beginPath(); // Start drawing path

  c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false); // Draw Circle

  c.fillStyle = this.color;
  c.shadowColor = "#E3EAEF"; // Glow Color

  c.shadowBlur = 20;
  c.fill(); // Fill the Circle

  c.closePath(); // End drawing

  c.restore();
};

Star.prototype.update = function () {
  this.draw(); //When ball hits bottom of screen

  if (this.position.y + this.radius + this.velocity.y > canvas.height) {
    this.velocity.y = -this.velocity.y * this.friction;
    this.shatter(4);
  } else {
    this.velocity.y += this.gravity;
  }

  this.position.x += this.velocity.x;
  this.position.y += this.velocity.y;
};

Star.prototype.shatter = function (n) {
  // Star should shatter into 'n' ministars when star hits the floor
  // decreasing the radius of star each time it hits the floor so that new ministars are not rendered again and again
  this.radius -= 3;

  for (var i = 0; i < n; i++) {
    miniStars.push(new MiniStar(this.position.x, this.position.y, 2));
  } // console.log(miniStars);

};

function MiniStar(x, y, radius, color) {
  Star.call(this, x, y, radius, color);
  this.velocity = {
    x: _utils_js__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-5, 5),
    y: _utils_js__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-15, 15)
  };
  this.gravity = 0.1;
  this.friction = 0.8;
  this.ttl = 100; // ttl: time to live - for how many frames should this stars live for

  this.opacity = 1;
}

MiniStar.prototype.draw = function () {
  c.save();
  c.beginPath(); // Start drawing path

  c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false); // Draw Circle

  c.fillStyle = "rgba(227, 234, 239, ".concat(this.opacity, ")");
  c.shadowColor = "#E3EAEF"; // Glow Color

  c.shadowBlur = 20;
  c.fill(); // Fill the Circle

  c.closePath(); // End drawing

  c.restore();
};

MiniStar.prototype.update = function () {
  this.draw(); //collision with floor

  if (this.position.y + this.radius + this.velocity.y > canvas.height) {
    this.velocity.y = -this.velocity.y * this.friction;
  } else {
    this.velocity.y += this.gravity;
  } // Movement


  this.position.x += this.velocity.x;
  this.position.y += this.velocity.y;
  this.ttl -= 1;
  this.opacity -= 1 / this.ttl; // To decrease opacity
}; // Creating attack balls (representing qubits)


var Qubit = /*#__PURE__*/function () {
  function Qubit(x, y, radius, x_vel, color) {
    _classCallCheck(this, Qubit);

    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: x_vel,
      y: 0
    };
    this.radius = radius, this.color = color;
  }

  _createClass(Qubit, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.fillStyle = this.color;
      c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true);
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
    }
  }]);

  return Qubit;
}(); // Creating Image Object and returning it to be drawn on canvas from the specified source


function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
} // Background Gradient Object


var backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);
backgroundGradient.addColorStop(0, '#171e26');
backgroundGradient.addColorStop(1, '#3f586b'); // Creating Platfrom Image

var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var platformSmallTallImage = createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]); // Creating Object Of Player

var player = new Player(); // Array to store platforms

var platforms = []; // Array to store generic objects

var genericObjects = []; // Array to store stars

var stars = [];
var miniStars = [];
var backgroundStars = []; // Array to store enemy qubits

var enemyQubits = []; // Array to store player qubits

var playerQubits = []; // time-counter for spawning stars when it is divisible by certain random number

var ticker = 0;
var randomStarSpawnRate = 150;
var randomEnemyQubitSpawnRate = 700; // Array to store colors of qubit representing diffrent states of qubit

var qubitColors = ['white', 'black', '#A6A6A6']; // white - 0, black - 1, #A6A6A6 - Grey - H|0> - Superposition
// keys Object to store of keys pressed or not (initially keys are not pressed so false)

var keys = {
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
var scrollOffset = 0; // To keep record of how far the player is from the origin in x-direction

var score = 0; // Initialising function for initial drawing/ressetting everything

function init() {
  platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  player = new Player(); // Creating objects of platforms and drawing them at different location

  platforms = [new Platform({
    x: platformImage.width * 4 + 9,
    y: 350,
    image: platformSmallTallImage
  }), new Platform({
    x: -1,
    y: 560,
    image: platformImage
  }), new Platform({
    x: platformImage.width - 3,
    y: 560,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 150,
    y: 560,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 300,
    y: 560,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 900,
    y: 560,
    image: platformImage
  })]; // Creating objects of generic objects and drawing them at different location

  genericObjects = [new GenericObject({
    x: -1,
    y: 100,
    image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  })]; // Creating background stars

  for (var i = 0; i < 45; i++) {
    // Creating random state for background stars
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var radius = Math.random() * 3;
    backgroundStars.push(new Star(x, y, radius, 'white'));
  }

  scrollOffset = 0;
} // Animation Loop


function animate() {
  requestAnimationFrame(animate); //Repeatedly creates an animation by executing code( inside animate() ) again and again as user makes changes to screen
  // Resetting our canvas color

  c.fillStyle = backgroundGradient;
  c.fillRect(0, 0, canvas.width, canvas.height); // Drawing elements of backgroundStars array on screen

  backgroundStars.forEach(function (backgroundStar) {
    backgroundStar.draw();
  }); // Drawing elements of genericOjects array on screen

  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  }); // Drawing elements of platforms array on screen

  platforms.forEach(function (platform) {
    platform.draw();
  }); // Drawing elements of stars array on screen

  stars.forEach(function (star, index) {
    star.update();

    if (star.radius == 1) {
      stars.splice(index, 1); // remove 1 star at the 'index' in stars array when the radius of this star is zero.
    }
  }); // Drawing elements of miniStars array on screen

  miniStars.forEach(function (miniStar, index) {
    miniStar.update();

    if (miniStar.ttl == 0) {
      miniStars.splice(index, 1); // remove 1 ministar at the 'index' in ministars array after it lived for 'ttl' frames
    }
  });
  ticker++;

  if (ticker % randomStarSpawnRate == 0) {
    var radius = 10;
    var x = Math.max(Math.random() * canvas.width - radius);
    stars.push(new Star(x, -100, radius, 'white'));
    randomStarSpawnRate = _utils_js__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(150, 200);
  } // Creating enemy qubits


  if (ticker % randomEnemyQubitSpawnRate == 0) {
    var _x = canvas.width + 100;

    var y = player.position.y + player.height / 2;
    var _radius = 12;
    var x_vel = -15;
    var color = qubitColors[_utils_js__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(0, 2)];
    enemyQubits.push(new Qubit(_x, y, _radius, x_vel, color));
    randomEnemyQubitSpawnRate = _utils_js__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(300, 400);
  } // Drawing elements of enemyQubits array on screen


  enemyQubits.forEach(function (enemyQubit, index) {
    enemyQubit.update(); // Deleting enemy qubit when it reaches left side of canvas

    if (enemyQubit.position.x + enemyQubit.radius <= 0) {
      setTimeout(function () {
        enemyQubits.splice(index, 1);
      }, 0);
    } // Player Qubit vs. enemy Qubit


    playerQubits.forEach(function (playerQubit, indexPQ) {
      if (playerQubit.position.x + playerQubit.radius >= enemyQubit.position.x - enemyQubit.radius && playerQubit.position.y === enemyQubit.position.y) {
        score += 100;
        scoreEl.innerHTML = score;
        setTimeout(function () {
          enemyQubits.splice(index, 1);
          playerQubits.splice(indexPQ, 1);
        }, 0);
      }
    }); // Loose condition 2: Enemy Qubit hits Player

    if (player.position.y === enemyQubit.position.y && player.position.x + player.width >= enemyQubit.position.x - enemyQubit.radius) {
      console.log('lost due to hit');
    }
  }); // Drawing elements of playerQubits array on screen

  playerQubits.forEach(function (playerQubit, index) {
    playerQubit.update(); // Deleting player qubit when it reaches left side of canvas

    if (playerQubit.position.x - playerQubit.radius >= canvas.width) {
      setTimeout(function () {
        playerQubits.splice(index, 1);
      });
    }
  }); // updating our player

  player.update();

  if (keys.right.pressed && player.position.x < 0.75 * canvas.width || keys.right.pressed && scrollOffset === 2930 && player.position.x > 0 // So that scrren don't mobe more right when win position is reached
  ) {
      player.velocity.x = player.speed;
    } else if (keys.left.pressed && player.position.x > 0.1 * canvas.width || keys.left.pressed && scrollOffset === 0 && player.position.x > 0 // So that scrren don't move more left at scrollOfset = 0
  ) {
      player.velocity.x = -player.speed;
    } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += player.speed * 0.66;
      });
    }
  } // Roof Collision


  if (player.position.y + player.velocity.y - 10 <= 0) {
    player.velocity.y = 15;
  } // platform collision detection


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y
    /* For making player stop above platform */
    && player.position.y + player.height + player.velocity.y >= platform.position.y
    /* For making it stop only when it hits the platform */
    && player.position.x + player.width >= platform.position.x
    /* For making it fall when its on left side of pltform  */
    && player.position.x <= platform.position.x + platform.width) {
      /* For making it fall when its on left side of pltform  */
      player.velocity.y = 0;
    }
  }); // Win Codition

  if (scrollOffset > platformImage.width * 4 + 500) {
    console.log('Win');
  } // Lose Condition - 1: Death Pit


  if (player.position.y > canvas.height) {
    // Resetting stars array so that previous stars clear away when level is re-played after death
    stars = []; // miniStars = []

    console.log('You Lose');
    init();
  }
}

init();
animate();
addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

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

    case 81:
      // q: spawning qubit |0>
      var x_white = player.position.x + player.width + 12;
      var y_white = player.position.y + player.height / 2;
      var radius_white = 12;
      var color_white = 'white';
      var x_vel_white = 15;
      playerQubits.push(new Qubit(x_white, y_white, radius_white, x_vel_white, color_white)); // console.log(playerQubits);

      break;

    case 88:
      // q: spawning qubit |1>
      var x_black = player.position.x + player.width + 12;
      var y_black = player.position.y + player.height / 2;
      var radius_black = 12;
      var color_black = 'black';
      var x_vel_black = 15;
      playerQubits.push(new Qubit(x_black, y_black, radius_black, x_vel_black, color_black));
  }
});
addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;

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

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map