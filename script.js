// Basic Three.js Scene
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Earth
const geometry = new THREE.SphereGeometry(1, 64, 64);
const material = new THREE.MeshPhongMaterial({
    color: 0x2266ff
});

const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

// Light
const light = new THREE.PointLight(0xffffff, 2);
light.position.set(5,5,5);
scene.add(light);

camera.position.z = 3;

// Animation
function animate(){
    requestAnimationFrame(animate);

    earth.rotation.y += 0.003;

    renderer.render(scene,camera);
}

animate();
