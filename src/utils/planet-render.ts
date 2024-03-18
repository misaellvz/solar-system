import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; 

export const planetRender = (
  container: HTMLDivElement | null, // Container element where the planet will be rendered
  texture: string, // Texture URL for the planet
) => {
  if (container === null) return;


  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75, // Field of view
    window.innerWidth / 1000, // Aspect ratio
    0.1, // Near clipping plane
    1000, // Far clipping plane
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, 1000); // Set renderer size to match container
  // Remove any existing child element from the container and append the renderer's DOM element
  if (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
  container.appendChild(renderer.domElement);

  // Add orbit controls to enable user interaction
  new OrbitControls(camera, renderer.domElement);

  // Create planet geometry, texture, and material
  const planetGeometry = new THREE.SphereGeometry(3, 64, 64); // Radius, width segments, height segments
  const planetTextureLoader = new THREE.TextureLoader();
  const planetTexture = planetTextureLoader.load(texture);
  const planetMaterial = new THREE.MeshBasicMaterial({ map: planetTexture });

  // Create planet mesh and add it to the scene
  const planet = new THREE.Mesh(planetGeometry, planetMaterial);
  scene.add(planet);


  if (texture === '/assets/saturn.jpg') {
    const ringGeometry = new THREE.RingGeometry(3.5, 5, 64); // Inner radius, outer radius, segments
    const ringTextureLoader = new THREE.TextureLoader();
    const ringTexture = ringTextureLoader.load('/assets/saturnring.gif');
    const ringMaterial = new THREE.MeshBasicMaterial({
      map: ringTexture, // Texture for the rings
      side: THREE.DoubleSide, // Render both sides of the rings
      transparent: true, // Make the rings transparent
    });

    // Create rings mesh and add it to the scene
    const rings = new THREE.Mesh(ringGeometry, ringMaterial);
    rings.rotation.x = Math.PI / 2; 
    scene.add(rings);
  }
  
  camera.position.z = 10;

  // Add directional light to the scene
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(5, 3, 5);
  scene.add(directionalLight);

  // Define an animation loop function to continuously update the scene
  let animationFrameId: number;
  function animate() {
    animationFrameId = requestAnimationFrame(animate);
    planet.rotation.y += 0.005; // Rotate the planet
    renderer.render(scene, camera); // Render the scene
  }

  // Start the animation loop
  animate();
};
