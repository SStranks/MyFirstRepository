varying float vRand;
uniform vec3 palette[12];

void main() {
  vec3 color = palette[int(vRand)];
  gl_FragColor = vec4(color, 1);
}