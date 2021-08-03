AFRAME.registerSystem("level-1-spawning", {
    init: function () {
        var counter = 0;
        var sceneEl = document.querySelector("a-scene");
        this.spawnNext = function () {
            console.log("spawning enemy");
            var baby = document.createElement("a-entity");
            baby.setAttribute("mixin", "malware");
            baby.setAttribute("position", { x: -6 + (counter * 2.5), y: 2, z: -5 });
            sceneEl.appendChild(baby);
            counter++;
            if(counter === 6){
                clearInterval(this.myInterval);
            }
        };
        this.myInterval = setInterval(() => {
            this.spawnNext();
        }, 3000);
        console.log("init ran");
    },
    remove: function () {
        clearInterval(this.myInterval);
    }
});