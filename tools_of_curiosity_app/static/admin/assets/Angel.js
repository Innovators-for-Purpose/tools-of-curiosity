var command = new Array(10);
command.unshift("1");
console.log(command[0]);
function takecommand(command) {
  console.log(command[0]);
}
var display = [];
var displayTally = 0;

var MOVEMENT_IDS = {
  forward: "forward",
  backward: "backward",
  right: "right",
  left: "left"
};

AFRAME.registerSystem("movelist", {
  schema: {},

  addQueue: function(id) {
    console.log(id);
    if (displayTally >= 10) {
      return "Delete Code To Add More";
    } else {
      display.push(id);
      displayTally++;
      console.log(id);
    }
  },

  pushCode: function() {
    var cords = document.querySelector("#movement");
    var turnTally = 0;
    var i;
    for (i = 0; i < 10; i++) {
      if (display[i] == "forward") {
        if (turnTally == 0) {
          document.querySelector("#Angel").object3D.position.x += 1;
        console.log(turnTally)
        } else if (turnTally == 90) {
          document.querySelector("#Angel").object3D.position.z += 1;
        } else if (turnTally == 180) {
          document.querySelector("#Angel").object3D.position.x -= 1;
        } else {
          document.querySelector("#Angel").object3D.position.z -= 1;
        }
      } else if (display[i] == "backward") {
        if (turnTally == 0) {
          document.querySelector("#Angel").object3D.position.x -= 1;
        } else if (turnTally == 90) {
          document.querySelector("#Angel").object3D.position.z -= 1;
        } else if (turnTally == 180) {
          document.querySelector("#Angel").object3D.position.x += 1;
        } else {
          document.querySelector("#Angel").object3D.position.z += 1;
        }
      } else if (display[i] == "right") {
        turnTally = turnTally + 90;
        console.log(turnTally)
      } else if (display[i] == "left") {
        turnTally = turnTally - 90;
        console.log(turnTally)
      } else {
        console.log("no command at slot " + i);
      }
      if (turnTally >= 360) {
        turnTally = turnTally - 360;
      }
      if (turnTally < 0) {
        turnTally = turnTally + 360;
      }
      document
        .querySelector("#Angel")
        .setAttribute("rotation", { x: 0, y: turnTally, z: 0 });
    }
  },

  run: function() {
    this.pushCode();
    
  },

  displaySequence: function(display) {
    var i;
    for (i = 0; i < display.length; i++) {
      if (display[i] == "forward") {
      } else if (display[i] == "backward") {
      } else if (display[i] == "right") {
      } else if (display[i] == "left") {
      } else {
        console.log("error");
      }
    }
  },

  displayIcon: function() {
    if (("mousedown", "#icon")) {
    }
  }
});
AFRAME.registerComponent("tile", {
  schema: {
    x: { type: "int", default: 1 },
    y: { type: "int", default: 1 }
  }
});

function isSafe(monkeyX, monkeyZ) {
  var tileCords = [];
  var allTiles = document.querySelectorAll("[tile]");
  for (var i = 0; i <= allTiles.length - 1; i++) {
    tileCords.push(allTiles[i].getAttribute("position"));
    console.log(allTiles[i].getAttribute("position").x +", "+ allTiles[i].getAttribute("position").z);
  }
  for (var i = 0; i <= tileCords.length - 1; i++) {
    if (tileCords[i].x == monkeyX && tileCords[i].z == monkeyZ) {
      return true;
    }
  }
  return false;
}
function currentLocation(monkey) {
  var monkeyCurrentPos = monkey.getAttribute("position");
  return {x:monkeyCurrentPos.x , z:monkeyCurrentPos.z};

  
}
function restart(monkey){
monkey.setAttribute('position', {x: 0, y: 1, z: 0});  
  
}
  
  
  

setTimeout(function() {
  console.log(isSafe(-1, -3));
  console.log(isSafe(1, 1));
  console.log(isSafe(1, 3));
  console.log(isSafe(document.querySelector('#monkey').getAttribute("position").x, document.querySelector('#monkey').getAttribute("position").z))
  
  console.log(currentLocation(document.getElementById("box_a")));
}, 1000);
