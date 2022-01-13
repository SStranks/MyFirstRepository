'use strict'

import './style.css'
import Sketch from './Sketch.js';

new Sketch({
  guiConfig: true,
  settings: {
    particleSpreadX: 2,
    particleSpreadY: 10,
    particleSpreadZ: 2.5,
    particles: 5000,
    particleSize: 0.005,
    velocity: 0.075,
    gravity: 0.05
  }

  // dom: document.getElementById("container"),
  // config: false,
  // url: myimage,
  // mouseover: "#mouseover",
  // settings:{
    // number: 5000,
    // trails: 0.1,
    // size: 0.7,
    // gravity:0.24,
    // gravityDifference:0.08,
    // randomness: 0.5,
    // sideScale: 4,
    // speedScale: 8
  // }
});