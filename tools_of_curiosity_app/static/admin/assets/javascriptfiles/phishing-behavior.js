AFRAME.registerComponent("phishing-behavior", {
    init: function() {
      var el = this.el;
      var sceneEl = document.querySelector("a-scene");
      this.createPopUp = function() {
        var popUp = document.createElement("a-entity");
        popUp.setAttribute("mixin", "popUp"); // Will add the attributes from the popUp mixin to the object
        var exitButton = document.createElement("a-entity");
        exitButton.setAttribute("geometry", "primitive: box"); // These are all the attributes we want the exit button to have
        exitButton.setAttribute("material", "color: blue"); // Feel free to change any of these
        exitButton.setAttribute("position", ".3 .3 .1");
        exitButton.setAttribute("scale", ".1 .1 .1");
        exitButton.setAttribute("id", "exitButton"); // Do not remove this, the pop-up.js needs this id tag
        sceneEl.appendChild(popUp);
        popUp.appendChild(exitButton); // Have the exit button hit box be a child of the main pop up, don't change this
      };
      this.myInterval = setInterval(() => {
        this.createPopUp;
      }, 4000); // Currently the phishing enemy will spawn a pop up every 4 seconds but you can change how the pop up is triggered
    },
    remove: function() {
        clearInterval(this.myInterval);
    }
  });
  