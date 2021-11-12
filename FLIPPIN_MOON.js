import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'; 
// J SCENE
const scene = new THREE.Scene();
// J CAMERA
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// J RENDERER
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
// J METHODS FOR CAM + REND
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// J renderer.render CALLED HERE AND @ END OF LOOP
renderer.render( scene, camera );

// J LIGHTS + CONTROLS
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add( pointLight, ambientLight )

const controls = new OrbitControls(camera, renderer.domElement);

// J TORUS
// const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
// const material = new THREE.MeshStandardMaterial( { color: 0xffffff });
// const torus = new THREE.Mesh( geometry, material ); 
// scene.add(torus)

// J TORUS 2
// const geometry2 = new THREE.TorusGeometry( 8, 3, 16, 100 );
// const material2 = new THREE.MeshStandardMaterial( { color: 0x999999 });// no light source required 
// const torus2 = new THREE.Mesh( geometry2, material2 ); 
// scene.add(torus2)

// J STAR LOOP
// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//   const material = new THREE.MeshBasicMaterial({ color: 0xffffff })
//   const star = new THREE.Mesh( geometry, material );
//   const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) );
//   star.position.set(x, y, z);
//   scene.add(star)
// }
// Array(1000).fill().forEach(addStar)

// const spaceTexture = new THREE.TextureLoader();
// scene.background = spaceTexture;
// const spaceTexture = new THREE.TextureLoader().load('./images/FS.jpg');
// scene.background = spaceTexture;

// J PICTURED BOX
document.body.onscroll = moveCamera

const jonTexture = new THREE.TextureLoader().load('./images/jCircle.png');

const jon = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial( {map: jonTexture })
)

scene.add(jon);

// J MOON
const moonTexture = new THREE.TextureLoader().load('./images/moon.jpg');

const moon = new THREE.Mesh(
new THREE.SphereGeometry(3,32,32),
new THREE.MeshBasicMaterial( {
  map: moonTexture, 
})
);

scene.add(moon)

// moon.position.z = 30;
// moon.position.setX(-10);

function animate() {
  requestAnimationFrame(animate);

  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  // jon.rotation.y += 0.01;
  // jon.rotation.z += 0.01;

  // camera.position.z = t * -0.01; 
  // camera.position.x  = t * -0.002; 
  // camera.position.y  = t * -0.002; 

  // torus.rotation.x += 0.07;
  // torus.rotation.y += 0.005;
  // torus.rotation.z += 0.015;
  // torus.translateY(.03);
  // torus.translateX(-.03);
  // torus2.rotation.x += 0.03;
  // torus2.rotation.y += 0.005;
  // torus2.rotation.z += -0.01;
  // torus2.translateX(.03);
  controls.update();

  renderer.render( scene, camera ); 
}

animate()

function moveCamera() {
  // call where the user is currently scrolled to:
  // gives us the dimensions of the viewport and the top property will shows us exactly how far we are from on top of the webpage.
  const t = document.body.getBoundingClientRect().top;
  // now we can start making changes to properties on our 3D objects
}
