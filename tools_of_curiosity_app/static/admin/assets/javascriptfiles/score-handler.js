AFRAME.registerSystem("score-handler", {
    init: function () {
      var sceneEl = document.querySelector("a-scene");
      var cameraEl = sceneEl.querySelector("#player");
      var points = 0; // Player's starting points
      var scoreCounter = sceneEl.querySelector("#playerScore");
      this.addPoints = function (event) {
        points = points + event.detail.points; // Add the given number of points for that enemy
        scoreCounter.setAttribute("text", {value: points}); // Update info board's points
        if(points === 6){
          var winScreen = document.createElement("a-entity");
          winScreen.setAttribute("geometry", "primitive: plane"); // These are all the attributes we want the exit button to have
          winScreen.setAttribute("material", "color: blue");
          winScreen.setAttribute("text", "value: You Win!");
          winScreen.setAttribute("position", "0 0 -1")
          cameraEl.appendChild(winScreen);
        }
      }
      this.el.addEventListener("enemy-died", this.addPoints);
    },
    remove: function () {
      this.el.removeEventListener("enemy-died", this.addPoints);
    }
  });