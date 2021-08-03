AFRAME.registerComponent("trojan-behavior", {
    init: function () {
      let el = this.el;
      let sceneEl = document.querySelector("a-scene");
      this.createEnemy = function() {
        console.log("Here comes the trojan!");
        var enemy = document.createElement("a-entity");
        enemy.setAttribute("mixin", "enemy");
        enemy.setAttribute("position", {x: Math.random() * 5 - 2.5, y: Math.random() * 5, z: -5});
        sceneEl.appendChild(enemy);
        el.parentNode.removeChild(el);
      };
      this.myInterval = setInterval(() => {
        el.parentNode.removeChild(el);
      }, 10000);
      el.addEventListener("click", this.createEnemy);
    },
    remove: function () {
      this.el.removeEventListener("click", this.createEnemy);
    }
  });