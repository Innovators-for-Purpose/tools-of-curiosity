AFRAME.registerComponent("health-handler", {
    init: function() {
      var el = this.el;
      var sceneEl = document.querySelector("a-scene");
      var healthCounter = sceneEl.querySelector("#playerHealth");
      sceneEl.addEventListener("health-pack", function(event){
        console.log("healing");
        el.components.target.healthPoints += event.detail.healthPoints // Update the health in the player body
        healthCounter.setAttribute("text", { value: el.components.target.healthPoints}); // Update the info board to reflect health change
      }); // When "health-pack" is emitted, call health-pack
      el.addEventListener("hit", () => {
        healthCounter.setAttribute("text", { value: el.components.target.healthPoints }); // Update the health on the info board
      }); 
      el.addEventListener("die", () => {
        console.log("You died... game over!");
        el.parentNode.removeChild(el); // Delete player body so health can no longer be depleted
      });
    }
  });
  