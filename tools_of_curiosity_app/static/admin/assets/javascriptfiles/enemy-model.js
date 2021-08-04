AFRAME.registerComponent("enemy-model", {
    init: function () {
        let el = this.el;
        let parent = el.parentNode;
        this.attack = function () {
            el.setAttribute("animation-mixer", "clip: Attack; loop: once");
        }
        parent.addEventListener("shoot", this.attack);
    }
});