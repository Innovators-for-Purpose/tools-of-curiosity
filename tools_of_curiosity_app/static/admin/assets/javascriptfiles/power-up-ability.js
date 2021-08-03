AFRAME.registerComponent("power-up-ability", {
    schema: {enemiesToKill: {type: "int", default: 3}}, // Determines how many enemies you need to kill before getting super ability
    
    init: function () {
      var el = this.el;
      var damage = 5; // Can be changed to however much damage you want this ability to do to all current enemies
      var sceneEl = document.querySelector("a-scene");
      var enemiesKilled = 0;
      var enemiesToKill = this.data.enemiesToKill; // Will take this from the default or whatever you set it to be when adding the component to an object
      sceneEl.addEventListener("enemy-died", () => {
        enemiesKilled += 1;
        if(enemiesKilled >= enemiesToKill){
          el.setAttribute("material", "color: blue"); // If charged, change appearance. You can change this later to be a bar that slowly fills or whatever you want
        }
        else {
          el.setAttribute("material", "color: grey"); // If not charged, be grey.
        }
      });
      el.addEventListener("click", () => {
        if(enemiesKilled >= enemiesToKill){ // Only activate the ability if it is charged up
          el.emit("superAbility", {damage: damage}, true);
          enemiesKilled = 0; // Reset the charge progress
          el.setAttribute("material", "color: grey");
        }
      });
    }
  });