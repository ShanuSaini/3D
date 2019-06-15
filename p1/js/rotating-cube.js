var canvas = document.getElementById('canvas3D');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

/* Three JS */
var scean = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

var controls = new THREE.OrbitControls( camera, renderer.domElement );

/* Create the shape */
var geometry = new THREE.BoxGeometry(1,1,1);
var cubeMaterials = [
    new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/1.jpg'), side: THREE.DoubleSide }),  // Right 
    new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/1.jpg'), side: THREE.DoubleSide }),  // Left
    new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/1.jpg'), side: THREE.DoubleSide }),  // Top
    new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/1.jpg'), side: THREE.DoubleSide }),  // Bottom
    new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/1.jpg'), side: THREE.DoubleSide }),  // Front
    new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('images/1.jpg'), side: THREE.DoubleSide })   // Back
];

/* Create a material, color or image texture */
var material = new THREE.MeshFaceMaterial(cubeMaterials);
var cube = new THREE.Mesh(geometry,material);
scean.add(cube);
cube.rotation.x = .5;
cube.rotation.y = .8;

camera.position.z = 3;

var ambientLight = new THREE.AmbientLight(0xffffff, .2);
scean.add(ambientLight);

var pointLightOne = new THREE.PointLight(0xffffff, 1, 100);
scean.add(pointLightOne);

var pointLightTwo = new THREE.PointLight(0xff0000, .5, 100);
scean.add(pointLightTwo);


/* Game Logic */
var update = function(){
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.005;

    var time = Date.now() * 0.0005;
    pointLightOne.position.x = Math.sin(time * .7) * 30;
    pointLightOne.position.y = Math.cos(time * .5) * 40;
    pointLightOne.position.z = Math.cos(time * .3) * 30;

    pointLightTwo.position.x = Math.sin(time * .7) * 30;
    pointLightTwo.position.y = Math.cos(time * .5) * 40;
    pointLightTwo.position.z = Math.cos(time * .3) * 30;
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