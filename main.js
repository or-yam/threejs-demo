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
