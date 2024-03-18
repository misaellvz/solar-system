import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

export const planetRender = (
  container: HTMLDivElement | null,
  texture: string,
) => {
  if (container === null) return;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / 1000,
    0.1,
    1000,
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, 1000);
  if (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
  container.appendChild(renderer.domElement);

  new OrbitControls(camera, renderer.domElement);

  const planetGeometry = new THREE.SphereGeometry(3, 64, 64);
  const planetTextureLoader = new THREE.TextureLoader();
  const planetTexture = planetTextureLoader.load(texture);
  const planetMaterial = new THREE.MeshBasicMaterial({ map: planetTexture });

  const planet = new THREE.Mesh(planetGeometry, planetMaterial);
  scene.add(planet);

  if (texture === '/assets/saturn.jpg') {
    const ringGeometry = new THREE.RingGeometry(3.5, 5, 64);
    const ringTextureLoader = new THREE.TextureLoader();
    const ringTexture = ringTextureLoader.load('/assets/saturnring.gif');
    const ringMaterial = new THREE.MeshBasicMaterial({
      map: ringTexture,
      side: THREE.DoubleSide,
      transparent: true,
    });

    const rings = new THREE.Mesh(ringGeometry, ringMaterial);
    rings.rotation.x = Math.PI / 2;
    scene.add(rings);
  }

  camera.position.z = 10;

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(5, 3, 5);
  scene.add(directionalLight);

  let animationFrameId: number;
  function animate() {
    animationFrameId = requestAnimationFrame(animate);
    planet.rotation.y += 0.005;
    renderer.render(scene, camera);
  }

  animate();
};
