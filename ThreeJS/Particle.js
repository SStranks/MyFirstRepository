'use strict'

import * as THREE from 'three';

export default class Particle {
  constructor(args) {
    this.args = args || {};
    this.position = new THREE.Vector3(
      (this.args.x || 2) * Math.random(),
      (this.args.y || 10) * Math.random(),
      (this.args.z || 2.5) * Math.random()
    )
    this.random = Math.random();
    this.gravity = args.gravity - (Math.random() * 0.05);
    this.velocity = new THREE.Vector3();
    this._initialVelocity(args.velocity);
    this.dvMax = 0.37
    // this.checkCollision = false;
    // this.size = args.size || 0.005;
    // this.color = args.color || 
  }

  _initialVelocity() {
    if (this.random > 0.95) this.velocity.x = 0.05;
    if (this.random < 0.05) this.velocity.x = -0.05;
    this.velocity.y = this.args.velocity;
    if (this.random > 0.95) this.velocity.z = 0.05;
    if (this.random > 0.05) this.velocity.z = -0.05;
  }

  update() {
    this.position.x += this.velocity.x;
    this.velocity.x /= 1.2;
    this.position.z += this.velocity.z;
    this.velocity.z /= 1.2;
    this.position.y -= this.velocity.y;
    if (this.velocity.y < this.dvMax) this.velocity.y += this.gravity;
  }
}


// colour: new THREE.Color(),
// life: life,
// maxLife: life,
// velocity: new THREE.Vector3(0, -15, 0),

// this.gravity = -0.1 - Math.random()/4
// this.slowGravity = -0.02 - Math.random()/10
// this.vel = new Vec2(0,this.gravity);
// this.target = this.gravity;

// this.friction = 0.9;
// this.phase = Math.random() * 2 * Math.PI