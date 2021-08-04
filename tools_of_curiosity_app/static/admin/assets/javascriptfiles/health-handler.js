AFRAME.registerComponent("health-handler", {
    init: function() {
      var el = this.el;
      var sceneEl = document.querySelector("a-scene");
      var cameraEl = sceneEl.querySelector("#player");
      var healthCounter = sceneEl.querySelector("#scoreBoard").querySelector("#playerHealth"); // Object you want to display player health needs the playerHealth id
      sceneEl.addEventListener("health-pack", function(event){
        el.components.target.healthPoints = el.components.target.healthPoints + event.detail.points // Update the health in the player body
        healthCounter.setAttribute("text", { value: el.components.target.healthPoints}); // Update the info board to reflect health change
      }); // When "health-pack" is emitted, call health-pack
      el.addEventListener("hit", () => { // Called when the player's hit box is hit by a bullet
        healthCounter.setAttribute("text", { value: el.components.target.healthPoints }); // Update the health on the info board
      }); 
      el.addEventListener("die", () => { // Called when the player's health reaches 0 or lower
        var loseScreen = document.createElement("a-entity");
        loseScreen.setAttribute("geometry", "primitive: plane"); // These are all the attributes we want the exit button to have
        loseScreen.setAttribute("material", "color: coral");
        loseScreen.setAttribute("scale", "10 10 1")
        loseScreen.setAttribute("text", "value: You Lose!; align: center");
        loseScreen.setAttribute("position", "0 0 -1")
        cameraEl.appendChild(loseScreen);
        el.parentNode.removeChild(el); // Delete player body so health can no longer be depleted
      });
    }
  });
  