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
        el.removeComponent("animation-mixer");
        parent.removeEventListener("shoot", this.attack);
        el.removeEventListener("animation-finished", this.idle);
    }
});