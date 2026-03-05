// Initialize AOS Animation Library
AOS.init({
    once: false,       // whether animation should happen only once - while scrolling down
    mirror: true,     // whether elements should animate out while scrolling past them
});


// LinkedIn and GitHub functions
function linkedin() {
    window.open("https://www.linkedin.com/in/umar-asif-10b48a17a", "_blank")
}
function github() {
    window.open("https://github.com/UDGCoders")
}

// Three.js 3D Background Setup
const canvas = document.querySelector('#bg-canvas');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Create a stunning 3D object (Torus Knot made of particles)
const geometry = new THREE.TorusKnotGeometry(10, 3, 200, 32);
const material = new THREE.PointsMaterial({
    size: 0.05,
    color: 0x4cc9f0,
    transparent: true,
    opacity: 0.8,
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

// Mouse interaction for subtle 3D movement
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
});

// Animation Loop
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;

    particles.rotation.y += 0.005;
    particles.rotation.x += 0.002;

    // Smooth mouse follow
    particles.rotation.y += 0.05 * (targetX - particles.rotation.y);
    particles.rotation.x += 0.05 * (targetY - particles.rotation.x);

    // Subtle Breathing effect
    particles.scale.x = Math.sin(elapsedTime * 0.5) * 0.1 + 1;
    particles.scale.y = Math.sin(elapsedTime * 0.5) * 0.1 + 1;
    particles.scale.z = Math.sin(elapsedTime * 0.5) * 0.1 + 1;

    renderer.render(scene, camera);
}

animate();

// Handle Window Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});