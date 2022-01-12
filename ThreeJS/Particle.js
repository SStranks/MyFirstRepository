'use strict'

import * as THREE from 'three';

export default class Particle {
  constructor(args){
    this.position = new THREE.Vector3(
      // args.x * Math.random() || 2 * Math.random(),
      // args.y * Math.random() || 10 * Math.random(),
      // args.z * Math.random() || 2.5 * Math.random()
      2 * Math.random(),
      10 * Math.random(),
      2.5 * Math.random()
    )
    // this.size = args.size || 0.005;
    // this.color = args.color || 
    // this.velocity = args.velocity || 0;
    // this.checkCollision = false;
  }
}

// position: new THREE.Vector3(
//   (Math.random() * 2 - 1) * 1.0,
//   (Math.random() * 2 - 1) * 1.0,
//   (Math.random() * 2 - 1) * 1.0),
// colour: new THREE.Color(),
// life: life,
// maxLife: life,
// velocity: new THREE.Vector3(0, -15, 0),

// this.pos = new Vec2();
// this.pos.x = args.x||0;
// this.pos.y = args.y||0;
// this.gravity = -0.1 - Math.random()/4
// this.slowGravity = -0.02 - Math.random()/10
// this.vel = new Vec2(0,this.gravity);
// this.target = this.gravity;

// this.friction = 0.9;
// this.phase = Math.random() * 2 * Math.PI