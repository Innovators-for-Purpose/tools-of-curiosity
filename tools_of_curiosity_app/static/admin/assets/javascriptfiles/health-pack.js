AFRAME.registerComponent("health-pack", {
    schema: {
      healthRestored: {type: "int", default: 5}
    },
    init: function() {
      var el = this.el;
      var healthPoints = this.data.healthRestored;
      this.healPlayer = function() {
        el.emit("health-pack", { points: healthPoints }, true);
        console.log("emitting to heal");
        el.parentNode.removeChild(el); // Remove the health pack once used
      };
      el.addEventListener("click", this.healPlayer);
      console.log("added heal listener");
    },
    remove: function() {
      this.el.removeEventListener("click", this.healPlayer);
    }
  });
  