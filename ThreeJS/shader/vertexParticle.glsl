uniform float time;
uniform float size;
varying vec2 vUv;
varying vec3 vPosition;

attribute float rands;
varying float vRand;

void main() {
  vRand = floor(rands * 12.0);
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  // gl_PointSize = size * 250.0;     // Acceptable largest size
  gl_PointSize = size;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
} 