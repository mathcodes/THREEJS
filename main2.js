import './style.css'

import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'; 

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render( scene, camera );


const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshStandardMaterial( { color: 0xe173b6 });// no light source required 
const torus = new THREE.Mesh( geometry, material ); 

scene.add(torus)

const geometry2 = new THREE.TorusGeometry( 8, 3, 16, 100 );
const material2 = new THREE.MeshStandardMaterial( { color: 0xccaa79 });// no light source required 
const torus2 = new THREE.Mesh( geometry2, material2 ); 

scene.add(torus2)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add( pointLight, ambientLight )

const controls = new OrbitControls(camera, renderer.domElement);


