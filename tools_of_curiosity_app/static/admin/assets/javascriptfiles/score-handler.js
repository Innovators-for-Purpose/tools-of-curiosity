AFRAME.registerSystem("score-handler", {
    init: function () {
      var sceneEl = document.querySelector("a-scene");
      var points = 0; // Player's starting points
      var scoreCounter = sceneEl.querySelector("#playerScore");
      this.addPoints = function (event) {
        points = points + event.detail.points; // Add the given number of points for that enemy
        scoreCounter.setAttribute("text", {value: points}); // Update info board's points
      }
      this.el.addEventListener("enemy-died", this.addPoints);
    },
    remove: function () {
      this.el.removeEventListener("enemy-died", this.addPoints);
    }
  });