import './style.css'

import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
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

// Debug GUI
const gui = new dat.GUI();
const world = {
  plane: {width: 400, height: 400, widthSegments: 50, heightSegments: 50}
}
gui.add(world.plane, "width", 1, 500).onChange(generatePlane);
gui.add(world.plane, "height", 1, 500).onChange(generatePlane);
gui.add(world.plane, "widthSegments", 1, 100).onChange(generatePlane);
gui.add(world.plane, "heightSegments", 1, 100).onChange(generatePlane);

function generatePlane(){
  planeMesh.geometry.dispose()
  planeMesh.geometry = new THREE.PlaneGeometry(
    world.plane.width, world.plane.height, world.plane.widthSegments, world.plane.heightSegments
  )

  // Create randomized Z-axis values to give textured appearance
  const { array } = planeMesh.geometry.attributes.position;
  const randomValues = [];
  for (let i = 0; i < array.length; i++){
    if (i % 3 === 0){
      const x = array[i];
      const y = array[i + 1];
      const z = array[i + 2];
      array[i] = x + (Math.random() - 0.5) * 3;
      array[i + 1] = y + (Math.random() - 0.5) * 3;
      array[i + 2] = z + (Math.random() - 0.5) * 3;
    }
    randomValues.push(Math.random() * Math.PI * 2)
  }

  // Create new attribute 'originalPosition' to store orig coords of vertices, for animation purposes
  planeMesh.geometry.attributes.position.randomValues = randomValues;
  planeMesh.geometry.attributes.position.originalPosition = planeMesh.geometry.attributes.position.array

  const colors = [];
  for (let i = 0; i < planeMesh.geometry.attributes.position.count; i++){
    colors.push(0, 0.19, 0.4)
  }
  planeMesh.geometry.setAttribute(
    "color",
    new THREE.BufferAttribute(new Float32Array(colors), 3)
  )
}


// Three main components of Three.JS required: Scene, Camera, Renderer
// Scene
const scene = new THREE.Scene();
const raycaster = new THREE.Raycaster();

// Camera
// Perspective Camera: FOV, Aspect Ratio, Clipping Plane Near, Clipping Plane Far
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
camera.position.set(0, 0, 50);

// Renderer
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(innerWidth, innerHeight);
// Inject the WebGL canvas into the HTML
document.body.appendChild(renderer.domElement)

// Elements
// Requires: Geometry, Material (custom shaders can be made with WebGL)
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true}) // Color is hexidecimal; self-illuminated
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

const smileTexture = new THREE.TextureLoader().load("smiley.png")
const boxMesh2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({map: smileTexture, transparent: true, side: THREE.DoubleSide})
)
boxMesh2.position.set(5, 0, 0)

const planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10);
const planeMaterial = new THREE.MeshPhongMaterial({
  // color: 0xff0000, // Removed because we are adding color to the vertexes below and this will interfere
  side: THREE.DoubleSide,
  flatShading: THREE.FlatShading,
  vertexColors: true
}); // Requires light to be visible
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh);
generatePlane();

// check out the normal attribute of a cube
let normal = boxGeometry.getAttribute('normal');
let position = boxGeometry.getAttribute('position');
let index = boxGeometry.getIndex();
console.log(index, scene)

// create and set up an arrow helper to find the direction of the first normal value
for(let i = 0; i < index.count; i+=3){
  // let dir = new THREE.Vector3(normal.array[i], normal.array[i + 1], normal.array[i + 2]),
  // origin = new THREE.Vector3(position.array[i], position.array[i + 1], position.array[i + 2]);
  
  const a = new THREE.Vector3(position.array[index.getX(i) * 3], position.array[index.getX(i) * 3 + 1], position.array[index.getX(i) * 3 + 2])
  const b = new THREE.Vector3(position.array[index.getY(i) * 3], position.array[index.getY(i) * 3 + 1], position.array[index.getY(i) * 3 + 2])
  const c = new THREE.Vector3(position.array[index.getZ(i) * 3], position.array[index.getZ(i) * 3 + 1], position.array[index.getZ(i) * 3 + 2])
  const triangle = new THREE.Triangle(a, b, c);
  
  const normal = new THREE.Vector3()
  const midPoint = new THREE.Vector3()
  triangle.getNormal(normal);
  triangle.getMidpoint(midPoint)

  if (i === 0) {
    console.log(a, b, c, normal, midPoint, index.getX(0), index.getY(0), index.getZ(0))
  }
  let helper = new THREE.ArrowHelper(normal, midPoint, 1, 0xff0000);
  scene.add(helper)
}





function addStar() {
  const geometry = new THREE.SphereGeometry(0.15, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load("space.jpeg");
scene.background = spaceTexture;

// Lights
const light = new THREE.DirectionalLight(0xffffff, 1); // Color, brightness
light.position.set(0, 1, 1);

// Helpers
// const lightHelper = new THREE.DirectionalLightHelper(light);
// const gridHelper = new THREE.GridHelper(200, 50);


scene.add(boxMesh);
scene.add(boxMesh2);
scene.add(light);
// scene.add(lightHelper)
// scene.add(gridHelper);

// Controls
const controls = new OrbitControls(camera, renderer.domElement)

const mouse = {
  x: undefined,
  y: undefined
}


let frame = 0;
function render(){
  // boxMesh.rotation.x += 0.01
  // boxMesh.rotation.y += 0.01
  // boxMesh.rotation.z += 0.01
  // planeMesh.rotation.x -= 0.01
  // planeMesh.rotation.y -= 0.01
  // planeMesh.rotation.z -= 0.01
  controls.update();

  frame += 0.01;
  const { array, originalPosition, randomValues } = planeMesh.geometry.attributes.position
  for (let i = 0; i < array.length; i += 3){
    array[i] = originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.01
    array[i + 1] = originalPosition[i + 1] + Math.sin(frame + randomValues[i + 1]) * 0.01
    array[i + 2] = originalPosition[i + 2] + Math.cos(frame + randomValues[i + 2]) * 0.01
  }
  planeMesh.geometry.attributes.position.needsUpdate = true;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(planeMesh);
  if (intersects.length > 0){
    const { color } = intersects[0].object.geometry.attributes;
    // vertice 1
    color.setX(intersects[0].face.a, 0.1)
    color.setY(intersects[0].face.a, 0.5)
    color.setZ(intersects[0].face.a, 1)
    // vertice 2
    color.setX(intersects[0].face.b, 0.1)
    color.setY(intersects[0].face.b, 0.5)
    color.setZ(intersects[0].face.b, 1)
    // vertice 3
    color.setX(intersects[0].face.c, 0.1)
    color.setY(intersects[0].face.c, 0.5)
    color.setZ(intersects[0].face.c, 1)

    color.needsUpdate = true;
    const initialColor = {r: 0, g: 0.19, b: 0.4}
    const hoverColor = {r: 0.1, g: 0.5, b: 1}
    gsap.to(hoverColor, {
      r: initialColor.r, 
      g: initialColor.g, 
      b: initialColor.b,
      duration: 0.5,
      onUpdate: () => {
        // vertice 1
        color.setX(intersects[0].face.a, hoverColor.r)
        color.setY(intersects[0].face.a, hoverColor.g)
        color.setZ(intersects[0].face.a, hoverColor.b)
        // vertice 2
        color.setX(intersects[0].face.b, hoverColor.r)
        color.setY(intersects[0].face.b, hoverColor.g)
        color.setZ(intersects[0].face.b, hoverColor.b)
        // vertice 3
        color.setX(intersects[0].face.c, hoverColor.r)
        color.setY(intersects[0].face.c, hoverColor.g)
        color.setZ(intersects[0].face.c, hoverColor.b)
        color.needsUpdate = true;
      }
    })
  }
  
  requestAnimationFrame(render)
  renderer.render(scene, camera)
}

render();


// Event Listeners
// Normalize coordinates from window to WebGL Scene.
addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / innerWidth) * 2 - 1
  mouse.y = -(e.clientY / innerHeight) * 2 + 1
})