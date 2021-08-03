AFRAME.registerComponent("health-handler", {
    init: function() {
      var el = this.el;
      var sceneEl = document.querySelector("a-scene");
      var healthCounter = sceneEl.querySelector("#playerHealth"); // Object you want to display player health needs the playerHealth id
      sceneEl.addEventListener("health-pack", function(event){
        el.components.target.healthPoints += event.detail.healthPoints // Update the health in the player body
        healthCounter.setAttribute("text", { value: el.components.target.healthPoints}); // Update the info board to reflect health change
      }); // When "health-pack" is emitted, call health-pack
      el.addEventListener("hit", () => { // Called when the player's hit box is hit by a bullet
        healthCounter.setAttribute("text", { value: el.components.target.healthPoints }); // Update the health on the info board
      }); 
      el.addEventListener("die", () => { // Called when the player's health reaches 0 or lower
        console.log("You died... game over!"); // Replace this with proper death screen
        el.parentNode.removeChild(el); // Delete player body so health can no longer be depleted
      });
    }
  });
  