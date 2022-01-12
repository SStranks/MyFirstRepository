uniform float time;
uniform float size;
varying vec2 vUv;
varying vec3 vPosition;

attribute float rands;
varying float vRand;

void main() {
  vRand = floor(rands*12);
  vec4 mvPosition = modelViewMatrix * vec4(position, 1);
  gl_PointSize = 1000 * (1 / - mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
} 