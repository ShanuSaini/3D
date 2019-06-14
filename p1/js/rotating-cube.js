var canvas = document.getElementById('canvas3D');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

/* Three JS */
var scean = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

/* Create the shape */
var geometry = new THREE.BoxGeometry(1,1,1);

/* Create a material, color or image texture */
var material = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: true});
var cube = new THREE.Mesh(geometry,material);
scean.add(cube);

camera.position.z = 3;

/* Game Logic */
var update = function(){
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.005;
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

window.addEventListener('resize', function(){
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})