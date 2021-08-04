AFRAME.registerComponent("trojan-behavior", {
    init: function () {
      let el = this.el;
      let sceneEl = document.querySelector("a-scene");
      this.createEnemy = function() {
        var enemy = document.createElement("a-entity");
        enemy.setAttribute("mixin", "trojan"); // The enemy added will have whatever attributes you put in the trojan mixin for that scene
        enemy.setAttribute("position", {x: Math.random() * 5 - 2.5, y: Math.random() * 5, z: -5}); // You can change where you want the trojan to appear
        sceneEl.appendChild(enemy);
        el.parentNode.removeChild(el); // Will remove the fake health after spawning a trojan
      };
      this.myInterval = setInterval(() => {
        el.parentNode.removeChild(el);
      }, 10000); // Fake health will delete itself after 10 seconds
      el.addEventListener("click", this.createEnemy);
    },
    remove: function () {
      this.el.removeEventListener("click", this.createEnemy);
    }
  });