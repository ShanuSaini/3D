var canvas = document.getElementById('canvas3D');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

/* Three JS */
var scean = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

/* Game Logic */
var update = function(){
    
}

/* Draw Scean */
var render = function(){
    renderer.render(scean, camera);
}

/* Run Game Loop (Update, Render, Repeat)*/
var gameLoop = function(){
    requestAnimationFrame(gameLoop);
    update();
    render();
}

gameLoop();