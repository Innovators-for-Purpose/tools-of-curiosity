AFRAME.registerComponent("pop-up", {
    init: function () {
      var el = this.el;
      var exitButton = document.querySelector("#exitButton");
      this.deletePopUp = function () {
        exitButton.removeEventListener("click", this.deletePupUp);
        el.removeChild(exitButton);
        el.parentNode.removeChild(el);
      };
     exitButton.addEventListener("click", this.deletePopUp); // Only when the exit button is clicked will the pop up be deleted
    }
  });