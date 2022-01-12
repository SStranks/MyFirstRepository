'use strict'

import * as THREE from 'three';

export function generateNormals(mesh, indexed){
  // Pre-defined ThreeJS geometry is indexed, buffergeometry is not
  const position = mesh.geometry.getAttribute('position');
  let normals = [];
  let midPoints = [];

  if (indexed === true){
    const index = mesh.getIndex();
    for(let i = 0; i < index.count; i += 3){
      const v1 = new THREE.Vector3(position.array[index.getX(i) * 3], position.array[index.getX(i) * 3 + 1], position.array[index.getX(i) * 3 + 2]);
      const v2 = new THREE.Vector3(position.array[index.getY(i) * 3], position.array[index.getY(i) * 3 + 1], position.array[index.getY(i) * 3 + 2]);
      const v3 = new THREE.Vector3(position.array[index.getZ(i) * 3], position.array[index.getZ(i) * 3 + 1], position.array[index.getZ(i) * 3 + 2]);
      const triangle= new THREE.Triangle(v1, v2, v3);
      const normal = new THREE.Vector3();
      const midPoint = new THREE.Vector3();
      normals.push(triangle.getNormal(normal));
      midPoints.push(triangle.getMidpoint(midPoint));
    }
  } else {
    for(let i = 0; i < position.count; i += 3){
      const v1 = new THREE.Vector3(position.getX(i), position.getY(i), position.getZ(i));
      const v2 = new THREE.Vector3(position.getX(i + 1), position.getY(i + 1), position.getZ(i + 1));
      const v3 = new THREE.Vector3(position.getX(i + 2), position.getY(i + 2), position.getZ(i + 2));
      const triangle= new THREE.Triangle(v1, v2, v3);
      const normal = new THREE.Vector3();
      const midPoint = new THREE.Vector3();
      normals.push(triangle.getNormal(normal));
      midPoints.push(triangle.getMidpoint(midPoint));
    }
  }
  
  let arrowHelpers = [];
  for(let i = 0; i < normals.length; i++){
    let helper = new THREE.ArrowHelper(normals[i], midPoints[i], 1, 0xff0000);
    arrowHelpers.push(helper)
  }

  return arrowHelpers
}

export function colors(){
  const light = ['#fcf8f2', '#f8f3ec', '#bdb392', '#e5d8ac', '#e1bf8f', '#cbb496', '#eecea6'];
  const dark = ['#af7d4b', '#917955', '#877454', '#695742', '#604a33'];
  const colors = light.concat(dark);
  return colors
}

export function getTime(){
  const date = new Date();
  let hour = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  hour = (hour < 10) ? "0" + hour : hour;
  mins = (mins < 10) ? "0" + mins : mins;
  secs = (secs < 10) ? "0" + secs : secs;
  return `${hour}:${mins}:${secs}`
}

export function cloneObject(objectName, scene){
  const selectedObject = scene.getObjectByName(objectName);
  return selectedObject.clone();
}

export function removeObjectFromScene(objectName, scene){
  const selectObject = scene.getObjectByName(objectName);
  selectObject.parent.remove(selectObject);
}

export function meshVisibility(objectName, bool, scene){
  const selectObject = scene.getObjectByName(objectName);
  selectObject.visible = bool;
}



