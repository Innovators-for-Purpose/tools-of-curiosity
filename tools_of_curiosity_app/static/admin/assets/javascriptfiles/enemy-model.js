AFRAME.registerComponent("enemy-model", {
    init: function () {
        let el = this.el;
        let parent = el.parentNode;
        this.attack = function () {
            el.removeComponent("animation-mixer");
            el.setAttribute("animation-mixer", "clip: Attack; loop: once");
        }
        this.idle = function () {
            el.setAttribute("animation-mixer", "clip: Idle");
        }
        parent.addEventListener("shoot", this.attack);
        el.addEventListener("animation-finished", this.idle);
    },
    remove: function () {
        this.el.removeComponent("animation-mixer");
        this.el.setAttribute("material", "visible: false");
        this.el.parentNode.removeEventListener("shoot", this.attack);
        this.el.removeEventListener("animation-finished", this.idle);
    }
});