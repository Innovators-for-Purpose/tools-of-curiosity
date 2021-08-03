AFRAME.registerComponent("power-up-ability", {
    schema: {enemiesToKill: {type: "int", default: 3}}, // Determines how many enemies you need to kill before getting super ability
    
    init: function () {
      var el = this.el;
      var damage = 5; // Can be changed to however much damage you want
      var sceneEl = document.querySelector("a-scene");
      var enemiesKilled = 0;
      var enemiesToKill = this.data.enemiesToKill;
      sceneEl.addEventListener("enemy-died", () => {
        enemiesKilled += 1;
        if(enemiesKilled >= enemiesToKill){
          el.setAttribute("material", "color: blue");
        }
        else {
          el.setAttribute("material", "color: grey");
        }
      });
      el.addEventListener("click", () => {
        console.log("clicked");
        if(enemiesKilled >= enemiesToKill){
          el.emit("superAbility", {damage: damage}, true);
          enemiesKilled = 0;
          el.setAttribute("material", "color: grey");
        }
      });
    }
  });