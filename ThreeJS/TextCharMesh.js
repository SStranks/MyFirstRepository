'use strict'

import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

export default class TextCharMesh {
  constructor(options, text) {
    this.text = text;
    this.name = text;
    this.visible = false;
    this.indexed = false;
    this.options = {
      font : options.font,
      size : options.size || 5,
      height : options.height || 1,
      curveSegments : options.curveSegments || 12,
      bevelEnabled : options.bevelEnabled || true,
      bevelThickness : options.bevelThickness || 1,
      bevelSize : options.bevelSize || 0.5,
      bevelOffset : options.bevelOffset || 0,
      bevelSegments : options.bevelSegments || 5
    }
    this.createTextGeometry();
    this.createTextMesh();
    const position = this.textGeometry.getAttribute('position');
    if (this.indexed === true) {
      const index = this.getIndex();
      this.faces = this.indexedFaces(index, position);
    } else {
      this.faces = this.nonIndexedFaces(position);
    }
  }

  get arrowHelpers() {
    let normals = this.computeNormals();
    let midPoints = this.computeMidPoints();
    let arrowHelpers = [];
    for (let i = 0; i < normals.length; i++) {
      let helper = new THREE.ArrowHelper(normals[i], midPoints[i], 1, 0xff0000);
      arrowHelpers.push(helper);
    }
    return arrowHelpers;
  }

  get width() {
    return this.computeMeshWidth();
  }

  computeMidPoints() {
    let midPoints = [];
    if (this.indexed === true) {
      this.faces.forEach((triangle) => {
        const midPoint = new THREE.Vector3();
        midPoints.push(triangle.getMidpoint(midPoint));
      })
    } else {
      this.faces.forEach((triangle) => {
        const midPoint = new THREE.Vector3();
        midPoints.push(triangle.getMidpoint(midPoint));
      }); 
    }
    return midPoints
  }

  computeNormals() {
    let normals = [];
    if (this.indexed === true) {
      this.faces.forEach((triangle) => {
        const normal = new THREE.Vector3();
        normals.push(triangle.getNormal(normal));
      })
    } else {
      this.faces.forEach((triangle) => {
        const normal = new THREE.Vector3();
        normals.push(triangle.getNormal(normal));
      }); 
    }
    return normals
  }

  indexedFaces(index, position) {
    let faces = [];
    for (let i = 0; i < index.count; i += 3) {
      const v1 = new THREE.Vector3(position.array[index.getX(i) * 3], position.array[index.getX(i) * 3 + 1], position.array[index.getX(i) * 3 + 2]);
      const v2 = new THREE.Vector3(position.array[index.getY(i) * 3], position.array[index.getY(i) * 3 + 1], position.array[index.getY(i) * 3 + 2]);
      const v3 = new THREE.Vector3(position.array[index.getZ(i) * 3], position.array[index.getZ(i) * 3 + 1], position.array[index.getZ(i) * 3 + 2]);
      const triangle = new THREE.Triangle(v1, v2, v3);
      faces.push(triangle);
    }
    return faces
  }

  nonIndexedFaces(position) {
    let faces = [];
    for (let i = 0; i < position.count; i += 3) {
      const v1 = new THREE.Vector3(position.getX(i), position.getY(i), position.getZ(i));
      const v2 = new THREE.Vector3(position.getX(i + 1), position.getY(i + 1), position.getZ(i + 1));
      const v3 = new THREE.Vector3(position.getX(i + 2), position.getY(i + 2), position.getZ(i + 2));
      const triangle = new THREE.Triangle(v1, v2, v3);
      faces.push(triangle);
    }
    return faces
  }

  computeMeshWidth() {
    this.textGeometry.computeBoundingBox();
    return Math.abs(this.textGeometry.boundingBox.max.x - this.textGeometry.boundingBox.min.x);
  }

  createTextGeometry() {
    this.textGeometry = new TextGeometry(this.text, this.options);
  }

  createTextMesh() {
    this.textMesh = new THREE.Mesh(this.textGeometry, [
      new THREE.MeshPhongMaterial({ color: 0xffffff }),
      new THREE.MeshPhongMaterial({ color: 0x0000ff })
    ]);
    this.textMesh.name = this.name;
    this.textMesh.visible = this.visible;
  }
}