import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import Stats from 'three/examples/jsm/libs/stats.module';

import { getTime, cloneObject, colors } from './utils'
import TextCharMesh from './TextCharMesh';
import Particle from './Particle'
import pVertex from './shader/vertexParticle.glsl'
import pFragment from './shader/fragmentParticle.glsl'

import * as dat from 'dat.gui';
import gsap from 'gsap';
import { VideoTexture } from 'three';


export default class Sketch {
  constructor(settings){
    this.settings = settings.settings || {};
    this.palette = colors();
    this.palette = this.palette.map((c) => new THREE.Color(c));
    this.guiConfig = settings.guiConfig || false;
    this.particleCount = settings.settings.particles || 1000;
    this.particleSize = settings.settings.particleSize || 0.005;
    this.charSpace = settings.charSpace || 5;
    this.textMeshes = {};
    this.time3DGroup = new THREE.Group();
    this._Initialize();
    this._AddObjects();
    this._Debug();
    this._Render();
  }

  _Initialize() {
    // Renderer
    this._renderer = new THREE.WebGLRenderer({ antialias: true });
    this._renderer.setPixelRatio(devicePixelRatio);
    this._renderer.setSize(innerWidth, innerHeight);

    // Inject WebGL canvas
    document.body.appendChild(this._renderer.domElement);

    // Resize
    window.addEventListener('resize', () => {
      this._OnWindowResize();
    }, false);

    // Camera
    const cOpt = { fov: 75, aspect: innerWidth / innerHeight, near: 0.1, far: 1000 };
    this._camera = new THREE.PerspectiveCamera(cOpt.fov, cOpt.aspect, cOpt.near, cOpt.far);
    this._camera.position.set(0, 10, 30);

    // Scene
    this._scene = new THREE.Scene();

    // Lights
    const light = new THREE.DirectionalLight(0xffffff, 1); // Color, brightness
    light.position.set(0, 1, 1);
    this._scene.add(light);

    // Controls
    this._controls = new OrbitControls(this._camera, this._renderer.domElement);
    this._controls.update();
    
    // Helpers
  }

  _AddObjects() {
    const loader = new FontLoader();
    loader.load('helvetiker_regular.typeface.json', function(font) {
      const textChars = "0123456789:";
      for (let i = 0; i < textChars.length; i++){
        const options = { font, x : 0 + (i * 10), y : 0, z : -10}
        const mesh = new TextCharMesh(options, textChars[i]);
        const meshWidth = TextCharMesh.width
        if (meshWidth > this.charSpace) this.charSpace = meshWidth;
        mesh.textMesh.position.set(0 + (i * 10), 0, -10);
        this.textMeshes[textChars[i]] = mesh
        this._scene.add(mesh.textMesh);
      }
      this._Generate3DTime();
    }.bind(this));
    this._PopulateParticles();
  }
    
  _PopulateParticles() {
    if (this.particles) {
      this.particlesGeometry.dispose();
      this.particlesMaterial.dispose();
      this._scene.remove(this.points)
    }
    this.particles = [];
    this.positions = new Float32Array(this.settings.particles * 3);
    this.rands = new Float32Array(this.settings.particles);

    const args = { x: this.settings.particleSpreadX, y: this.settings.particleSpreadY, z: this.settings.particleSpreadZ };
    for (let i = 0; i < this.settings.particles; i++){
      this.particles.push(new Particle(args))
      this.rands.set([Math.random()], i);
    }

    this.particlesGeometry = new THREE.BufferGeometry;
    this.particlesGeometry.setAttribute("position", new THREE.BufferAttribute(this.positions, 3));
    this.particlesGeometry.setAttribute("rands", new THREE.BufferAttribute(this.rands, 1));
    // this.particlesMaterial = new THREE.PointsMaterial({ size: this.particleSize })

    this.particlesMaterial = new THREE.ShaderMaterial({
      // side: THREE.DoubleSide,
      uniforms: {
        palette: { value: this.palette },
        size: { value: this.particleSize }
      },
      // blending: THREE.AdditiveBlending,
      vertexShader: pVertex,
      fragmentShader: pFragment
    });

    this.points = new THREE.Points(this.particlesGeometry, this.particlesMaterial);
    this._scene.add(this.points);
  }

  _UpdateParticles() {
    this.particles.forEach((particle, i) => {
      particle.position.y -= 0.05;
      if (particle.position.y < 0) particle.position.y = this.settings.particleSpreadY;
      this.positions.set([particle.position.x, particle.position.y, particle.position.z], i * 3)
    });
    this.points.geometry.attributes.position.needsUpdate = true;
  }

  _Debug() {
    console.log(this.settings, "Test")
    this._gui = new dat.GUI();
    if (this.guiConfig){
      this._gui.add(this.settings, "particles", 1000, 100000, 1000).onFinishChange(() => {
        this._PopulateParticles();
      });
      this._gui.add(this.settings, "particleSpreadX", 1, 10, 0.5).onFinishChange(() => {
        this._PopulateParticles();
      });
      this._gui.add(this.settings, "particleSpreadY", 5, 10, 0.5).onFinishChange(() => {
        this._PopulateParticles();
      });
      this._gui.add(this.settings, "particleSpreadZ", 1, 2.5, 0.25).onFinishChange(() => {
        this._PopulateParticles();
      });
    }
    // const world = {}
    // Stats: FPS
    this._statsFPS = new Stats();
    this._statsFPS.domElement.style.cssText = "position:absolute;top:3px;left:3px;";
    this._statsFPS.showPanel(0); // 0: fps,
    // Stats: Memory
    this._statsMemory = new Stats();
    this._statsMemory.showPanel(2); //2: mb, 1: ms, 3+: custom
    this._statsMemory.domElement.style.cssText = "position:absolute;top:3px;left:84px;";
    // Stats: Add to DOM
    document.body.appendChild(this._statsFPS.dom);
    document.body.appendChild(this._statsMemory.dom);
  }

  _Generate3DTime() {
    const currentTime = getTime();
    for (let i = 0; i < currentTime.length; i++) {
      const numMesh = cloneObject(currentTime[i], this._scene)
      numMesh.position.set((this.charSpace * i), 0, 0);
      // Adjust alignment of ":"
      if (currentTime[i] === ":") {
        const width = this.textMeshes[currentTime[i]].width;
        const moveXpos = (this.charSpace / 2) - (width / 2)
        numMesh.position.x += moveXpos;
        // TEMP: Showing Arrows
        const arrowHelpers = this.textMeshes[currentTime[i]].arrowHelpers;
        arrowHelpers.forEach((el) => {
          el.position.x += moveXpos + this.charSpace * 5
          this._scene.add(el)
        });
      }
      numMesh.name = `clone_${i}_${currentTime[i]}`
      numMesh.visible = true;
      this.time3DGroup.add(numMesh);
    }
    this._scene.add(this.time3DGroup);
  }
  
  _Refresh3DTime(currentTime) {
    for (let i = 0; i < this.time3DGroup.children.length; i++) {
      const char = this.time3DGroup.children[i].name
      if (char[char.length - 1] !== currentTime[i]) {
        const oldNumber = this.time3DGroup.children[i];
        const newNumber = cloneObject(currentTime[i], this._scene);
        this.time3DGroup.children[i] = newNumber;
        oldNumber.parent.remove(oldNumber)
        newNumber.position.set((this.charSpace * i), 0, 0);
        newNumber.name = `clone_${i}_${currentTime[i]}`
        newNumber.visible = true;
        this._scene.add(newNumber);
      }
    }
  }

  _OnWindowResize() {
    this._camera.aspect = window.innerWidth / window.innerHeight;
    this._renderer.setSize(window.innerWidth, window.innerHeight);
  }

  _UpdateTime() {
    this.previousTime = null;
    this.currentTime = getTime();
    if (this.currentTime !== this.previousTime) {
      this.previousTime = this.currentTime;
      this._Refresh3DTime(this.currentTime);
    }
  }

  _Render() {
    // time += 0.01;
    this._controls.update();
    this._statsFPS.update();
    this._statsMemory.update();
    this._UpdateTime();
    this._UpdateParticles();

    requestAnimationFrame(this._Render.bind(this))
    this._renderer.render(this._scene, this._camera)
  }
}