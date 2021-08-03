AFRAME.registerComponent("health-pack", {
    schema: {
      healthRestored: {type: "int", default: 5}
    },
    init: function() {
      var el = this.el;
      var healthPoints = this.data.healthRestored; // You can custom set the health that a pack will restore
      this.healPlayer = function() {
        el.emit("health-pack", { points: healthPoints }, true);
        el.parentNode.removeChild(el); // Remove the health pack once used
      };
      el.addEventListener("click", this.healPlayer);
    },
    remove: function() {
      this.el.removeEventListener("click", this.healPlayer);
    }
  });
  