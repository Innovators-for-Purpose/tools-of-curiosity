AFRAME.registerComponent("phishing-behavior", {
    init: function() {
      var el = this.el;
      var sceneEl = document.querySelector("a-scene");
      this.createPopUp = function() {
        var popUp = document.createElement("a-entity");
        popUp.setAttribute("mixin", "popUp");
        var exitButton = document.createElement("a-entity");
        exitButton.setAttribute("geometry", "primitive: box");
        exitButton.setAttribute("material", "color: blue");
        exitButton.setAttribute("position", ".3 .3 .1");
        exitButton.setAttribute("scale", ".1 .1 .1");
        exitButton.setAttribute("id", "exitButton");
        sceneEl.appendChild(popUp);
        popUp.appendChild(exitButton);
      };
      this.myInterval = setInterval(() => {
        this.createPopUp;
      }, 4000);
    },
    remove: function() {
        clearInterval(this.myInterval);
    }
  });
  