AFRAME.registerComponent("basic-enemy-behavior", {
    schema: {
      coolDown: { type: "int", default: 1000 }, // Default time between shots
      maxHealth: { type: "int", default: 5 }, // Default max health value
      pointValue: { type: "int", default: 1 } // Default number of points added on death
    },
  
    init: function() {
      // Called when an entity with this component is created
      let el = this.el;
      let sceneEl = document.querySelector("a-scene");
      var health = this.data.maxHealth;
      var points = this.data.pointValue;
      this.shoot = function() {
        this.el.emit("shoot");
      };
      this.myInterval = setInterval(() => {
        // Has enemy send out a shot every X miliseconds
        this.shoot();
      }, this.data.coolDown);
      this.clickAndDie = function() {
        health = health - 1; // When tapped by player, enemy will lose 1 health
        if (health === 0) {
          el.emit("enemy-died", { points: points }, true); // Add points to score, can have points be passed in depending on enemy type
          el.parentNode.removeChild(el); // Remove the enemy from scene once dead
        }
      };
      this.el.addEventListener("click", this.clickAndDie); // When clicked, will call the clickAndDie function
      this.powerUpDamage = function(event) {
        health -= event.detail.damage;
        if (health <= 0) {
          el.emit("enemy-died", { points: points }, true);
          el.parentNode.removeChild(el);
        }
      };
      sceneEl.addEventListener("superAbility", this.powerUpDamage);
    },
    remove: function() {
      clearInterval(this.myInterval);
      this.el.removeEventListener("click", this.clickAndDie);
    }
  });
  