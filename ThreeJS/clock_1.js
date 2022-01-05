import './style.css'

import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import Stats from "three/examples/jsm/libs/stats.module";

import * as dat from "dat.gui";
import gsap from "gsap";
import { VideoTexture } from 'three';

// Debug: dat.gui
// Canvas: Element in HTML for the scene
// Scene: new THREE.Scene()
// Objects: Geometry
// Objects: Materials
// Mesh: Combine Geometry and Materials
// Lights
// Sizes
// Camera
// Helpers
// Controls
// Renderer
// Animate
// Event Listeners

// Debug
// Dat.GUI
const gui = new dat.GUI();
const world = {}
// Stats: FPS
let statsFPS = new Stats();
statsFPS.domElement.style.cssText = "position:absolute;top:3px;left:3px;";
statsFPS.showPanel(0); // 0: fps,
// Stats: Memory
let statsMemory = new Stats();
statsMemory.showPanel(2); //2: mb, 1: ms, 3+: custom
statsMemory.domElement.style.cssText = "position:absolute;top:3px;left:84px;";
// Stats: Add to DOM
document.body.appendChild(statsFPS.dom);
document.body.appendChild(statsMemory.dom);

// Scene
const scene = new THREE.Scene();

// Camera
// Perspective Camera: FOV, Aspect Ratio, Clipping Plane Near, Clipping Plane Far
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
camera.position.set(0, 10, 30);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(innerWidth, innerHeight);
// Inject the WebGL canvas into the HTML
document.body.appendChild(renderer.domElement)


// Elements
// Requires: Geometry, Material (custom shaders can be made with WebGL
let fonty;
const loader = new FontLoader();
loader.load('helvetiker_regular.typeface.json', function(font){
  fonty = font;
  createTextMeshes(fonty); // Dictionary of chars
  addCharDict(); // Add chars to scene
  generate3DTime(currentTime);
});

let particleX;
let particleY;
let particleZ;
let particlesArr = [];
const particlesGeometry = new THREE.BufferGeometry;
const particlesCount = 100000;
const posArray = new Float32Array(particlesCount * 3);
for (let i = 0; i < particlesCount * 3; i += 3){
  posArray[i] = 2 * Math.random()      // 35 covers all nums
  posArray[i + 1] = 10 * Math.random()
  posArray[i + 2] = 2.5 * Math.random()
  particlesArr.push([posArray[i], posArray[i + 1], posArray[i + 2]])
}
particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
const material = new THREE.PointsMaterial({
  size: 0.005
})
const particlesMesh = new THREE.Points(particlesGeometry, material)
scene.add(particlesMesh)

// Lights
const light = new THREE.DirectionalLight(0xffffff, 1); // Color, brightness
light.position.set(0, 1, 1);

// Helpers
// const lightHelper = new THREE.DirectionalLightHelper(light);
// const gridHelper = new THREE.GridHelper(200, 50);

scene.add(light);
// scene.add(gridHelper);

// Controls
const controls = new OrbitControls(camera, renderer.domElement)


let textMeshes = {};
function createTextMeshes(font){
  const textChars = "0123456789:";
  for (let i = 0; i < textChars.length; i++){
    createTextCharMesh(textChars[i], font)
  }
}

function createTextCharMesh(text, font){
  const textGeometry = new TextGeometry(text, {
		font: font,
		size: 5,
		height: 1,          // Depth
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 1,
		bevelSize: 0.5,
		bevelOffset: 0,
		bevelSegments: 5
	});
  const newMesh = new THREE.Mesh(textGeometry, [
    new THREE.MeshPhongMaterial({ color: 0xffffff }),
    new THREE.MeshPhongMaterial({ color: 0x0000ff })
  ])
  // Add mesh to 'textMesh' dict
  textMeshes[text] = newMesh;
}

function addCharDict(){
  // Create one mesh per char, visibilty false, from which to clone;
  const textChars = "0123456789:";
  for (let i = 0; i < textChars.length; i++){
    const mesh = textMeshes[textChars[i]];
    mesh.position.set(0 + (i * 10), 0, -10);
    mesh.name = textChars[i]
    mesh.visible = false;
    mesh.geometry.computeBoundingBox();
    scene.add(mesh)
  }
  CHARSPACE = maxWidthOfCharMeshes();
}

function maxWidthOfCharMeshes(){
  let maxWidth = 0;
  for (const mesh in textMeshes){
    const { boundingBox } = textMeshes[mesh].geometry;
    const width = Math.abs(boundingBox.max.x - boundingBox.min.x);
    if (width > maxWidth) maxWidth = width;
  }
  return maxWidth
}

function updateParticle(particle, time){
  particle[1] -= 0.05
  if (particle[1] < 0) particle[1] = 10
}

const currentTime = getTime();
const time3DGroup = new THREE.Group();
let CHARSPACE = 0;

function generate3DTime(currentTime){
  for (let i = 0; i < currentTime.length; i++){
    const numberMesh = cloneObject(currentTime[i])
    numberMesh.position.set((CHARSPACE * i), 0, 0);
    if (currentTime[i] === ":"){
      numberMesh.geometry.computeBoundingBox();
      const width = Math.abs(numberMesh.geometry.boundingBox.max.x - numberMesh.geometry.boundingBox.min.x);
      numberMesh.position.x += (CHARSPACE / 2) - (width / 2)
    }
    numberMesh.name = `clone_${i}_${currentTime[i]}`
    numberMesh.visible = true;
    time3DGroup.add(numberMesh);
  }
  scene.add(time3DGroup);
  console.log(scene)
}

function refresh3DTime(currentTime){
  for (let i = 0; i < time3DGroup.children.length; i++){
    const char = time3DGroup.children[i].name
    if (char[char.length - 1] !== currentTime[i]){
      const oldNumber = time3DGroup.children[i];
      const newNumber = cloneObject(currentTime[i]);
      time3DGroup.children[i] = newNumber;
      oldNumber.parent.remove(oldNumber)
      newNumber.position.set((CHARSPACE * i), 0, 0);
      newNumber.name = `clone_${i}_${currentTime[i]}`
      newNumber.visible = true;
      scene.add(newNumber);
    }
  }
}

function cloneObject(objectName){
  const selectedObject = scene.getObjectByName(objectName);
  return selectedObject.clone();
}

function removeObjectFromScene(objectName){
  const selectObject = scene.getObjectByName(objectName);
  selectObject.parent.remove(selectObject);
}

function meshVisibility(objectName, bool){
  const selectObject = scene.getObjectByName(objectName);
  selectObject.visible = bool;
}

function updateTime(){
  const currentTime = getTime();
  if (currentTime !== previousTime){
    refresh3DTime(currentTime);
  }
}

let previousTime = getTime();
function getTime(){
  const date = new Date();
  let hour = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  hour = (hour < 10) ? "0" + hour : hour;
  mins = (mins < 10) ? "0" + mins : mins;
  secs = (secs < 10) ? "0" + secs : secs;
  return `${hour}:${mins}:${secs}`
}


let time = 0;
function render(){
  time += 0.01;
  controls.update();
  statsFPS.update();
  statsMemory.update();
  updateTime();
  particlesArr.forEach((particle, i) =>{
    updateParticle(particle, time);
    posArray.set([particle[0], particle[1], particle[2]], i * 3)
  });
  particlesMesh.geometry.attributes.position.needsUpdate = true;

  requestAnimationFrame(render)
  renderer.render(scene, camera)
}

render();
console.log(particlesArr)