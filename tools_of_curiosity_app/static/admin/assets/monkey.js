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
    var turnTally = 0;
    var i;
    for (i = 0; i < 10; i++) {
      if (display[i] == "forward") {
        if (turnTally == 0) {
          document.querySelector("#monkey").object3D.position.x += 1;
        } else if (turnTally == 90) {
          document.querySelector("#monkey").object3D.position.z += 1;
        } else if (turnTally == 180) {
          document.querySelector("#monkey").object3D.position.x -= 1;
        } else {
          document.querySelector("#monkey").object3D.position.z -= 1;
        }
      } else if (display[i] == "backward") {
        if (turnTally == 0) {
          document.querySelector("#monkey").object3D.position.x -= 1;
        } else if (turnTally == 90) {
          document.querySelector("#monkey").object3D.position.z -= 1;
        } else if (turnTally == 180) {
          document.querySelector("#monkey").object3D.position.x += 1;
        } else {
          document.querySelector("#monkey").object3D.position.z += 1;
        }
      } else if (display[i] == "right") {
        turnTally = turnTally + 90;
      } else if (display[i] == "left") {
        turnTally = turnTally - 90;
      } else {
        console.log("error");
      }
      if (turnTally >= 360) {
        turnTally = turnTally - 360;
      }
      if (turnTally < 0) {
        turnTally = turnTally + 360;
      }
      document
        .querySelector("#monkey")
        .setAttribute("rotation", { x: 0, y: turnTally, z: 0 });
    }
  },

  run: function() {
    this.pushCode();
    console.log(display);
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
