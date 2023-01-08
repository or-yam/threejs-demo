import './style.css';
import * as THREE from 'three';

/*
1. Scene
2. Camera
3. Renderer
*/

const scene = new THREE.Scene(); // Container

const FOV = 74;
const AR = window.innerWidth / window.innerHeight;
const NEAR = 0.1;
const FAR = 1000;
const camera = new THREE.PerspectiveCamera(FOV, AR, NEAR, FAR); // Mimic human perspective

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#canvas')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// move from the center
camera.position.setZ(30);

renderer.render(scene, camera);
// What happens??

const geometry = new THREE.IcosahedronGeometry(10, 0);
const material = new THREE.MeshStandardMaterial({
  // Update to Standard Material
  color: 0xf03080
});
const icosahedron = new THREE.Mesh(geometry, material);

scene.add(icosahedron);
// renderer.render(scene, camera);

// const pointLight = new THREE.PointLight(0x0000ff);
// pointLight.position.set(10, 5, 5);
// scene.add(pointLight);

// const pointLightHelper = new THREE.PointLightHelper(pointLight);
// scene.add(pointLightHelper);

// const ambientLight = new THREE.AmbientLight(0xffffff);
// scene.add(ambientLight);

const animate = () => {
  requestAnimationFrame(animate);
  icosahedron.rotation.x += 0.01;
  icosahedron.rotation.y += 0.005;
  icosahedron.rotation.z += 0.005;

  renderer.render(scene, camera);
};

animate();
