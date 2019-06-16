var canvas = document.getElementById('canvas3D');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

/* Three JS */
var scean = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.state.disable( renderer.context.BLEND );

var controls = new THREE.OrbitControls( camera, renderer.domElement );

var loader = new THREE.ObjectLoader();
loader.load(
    '../object/deserted-webgl-threejs/deserted-webgl.json',
    function(object){
        scean.add(object);
    }
);

camera.position.z = 30;

var ambientLight = new THREE.AmbientLight(0x000000, .2);
scean.add(ambientLight);

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

window.addEventListener('resize', function(){
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})