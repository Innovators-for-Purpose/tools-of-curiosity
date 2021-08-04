AFRAME.registerSystem("level-1-spawning", {
    init: function () {
        var counter = 0;
        var sceneEl = document.querySelector("a-scene");
        this.spawnNext = function () {
            var baby = document.createElement("a-entity"); // Create the base object you want to add to the scene
            baby.setAttribute("mixin", "malware"); // Add the preset of attributes you want that object to have
            baby.setAttribute("position", { x: -6 + (counter * 2.5), y: 2, z: -5 }); // This sets where the enemy will be created, you can change where you want them to spawn
            var modelPart = document.createElement("a-entity");
            modelPart.setAttribute("mixin", "malwareModel");
            sceneEl.appendChild(baby); // To add the enemy to the scene you must append the object to it
            baby.appendChild(modelPart);
            counter++; // Add to counter to keep track of where to put enemy and to know if we should stop making them
            if(counter === 6){
                clearInterval(this.myInterval); // Stop the calling of spawnNext
            }
        };
        this.myInterval = setInterval(() => {
            this.spawnNext();
        }, 3000); // Will call spawnNext every 3 seconds
    },
    remove: function () {
        clearInterval(this.myInterval);
    }
});