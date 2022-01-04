import './style.css'

import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import Stats from "three/examples/jsm/libs/stats.module";

import * as dat from "dat.gui";
import gsap from "gsap";

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
camera.position.set(0, 0, 10);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(innerWidth, innerHeight);
// Inject the WebGL canvas into the HTML
document.body.appendChild(renderer.domElement)


// Elements
// Requires: Geometry, Material (custom shaders can be made with WebGL
let clockTextGeo;
let fonty;
const loader = new FontLoader();
loader.load('helvetiker_regular.typeface.json', function(font){
  fonty = font;
	createTextMesh(font);
  createTextMeshes(fonty); // Dictionary of chars
  addCharDict(); // Add chars to scene
});

// Lights
const light = new THREE.DirectionalLight(0xffffff, 1); // Color, brightness
light.position.set(0, 1, 1);

// Helpers
// const lightHelper = new THREE.DirectionalLightHelper(light);
const gridHelper = new THREE.GridHelper(200, 50);

scene.add(light);
scene.add(gridHelper);

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
		size: 10,
		height: 5,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 1,
		bevelSize: 1,
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
  // Create the original individual chars meshes; to be cloned; visibility false
  const textChars = "0123456789:";
  for (let i = 0; i < textChars.length; i++){
    const mesh = textMeshes[textChars[i]];
    mesh.position.set(0 + (i * 10), 0, -10);
    mesh.name = textChars[i]
    mesh.visible = false;
    scene.add(mesh)
  }

  let selectObject = scene.getObjectByName("6");
  const newItem = selectObject.clone();
  newItem.position.setZ(0)
  newItem.visible = true;
  scene.add(newItem)
  console.log(newItem)
  console.log(scene)

  meshVisibility("6", false);
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

function createTextMesh(font){
  const textGeometry = new TextGeometry(getTime(), {
		font: font,
		size: 10,
		height: 5,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 1,
		bevelSize: 1,
		bevelOffset: 0,
		bevelSegments: 5
	});
  clockTextGeo = new THREE.Mesh(textGeometry, [
    new THREE.MeshPhongMaterial({ color: 0xffffff }),
    new THREE.MeshPhongMaterial({ color: 0xff0000 })
  ])
  clockTextGeo.castShadow = true;
  scene.add(clockTextGeo);
}

function refreshText(){
  scene.remove(clockTextGeo)
  clockTextGeo.geometry.dispose();
  clockTextGeo.material[0].dispose();
  clockTextGeo.material[1].dispose();
  createTextMesh(fonty)
}

function updateTime(){
  const currentTime = getTime();
  if (currentTime !== previousTime){
    refreshText();
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

function render(){
  controls.update();
  statsFPS.update();
  statsMemory.update();
  updateTime();

  requestAnimationFrame(render)
  renderer.render(scene, camera)
}

render();