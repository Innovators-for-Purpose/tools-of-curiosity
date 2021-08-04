AFRAME.registerComponent("worm-behavior", {
    schema: {time: {type: 'int', default: 2000}},
    
    init: function() {
      var el = this.el;
      var sceneEl = document.querySelector("a-scene");
      this.giveBirth = function() {
        var baby = document.createElement("a-entity");
        baby.setAttribute("mixin", "worm"); // Will add whatever attributes you add to the worm mixin to the new enemy
        baby.setAttribute("position", {x: Math.floor(Math.random() * -5), y: Math.floor(Math.random() * -5), z: Math.floor(Math.random() * -5)});
        var time = this.data.time * 2;
        baby.setAttribute("give-birth", {time: time}); // New enemy will have this script, but will take twice as long to spawn a new worm than before
        sceneEl.appendChild(baby);
      };
      this.myInterval = setInterval(() => {
        this.giveBirth();
      }, this.data.time);
    },
    
    remove: function() {
      clearInterval(this.myInterval);
    }
  });
  