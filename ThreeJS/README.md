### Development Notes
##### 07/01/2022

- Created a utility file.
- generateNormals generates all the triangles for a particular mesh, then calculates the midpoints (centres) and 'normals' for each.
- Showing directional helper arrows for normals.
- For memory management each 3D character mesh is generated only once, hidden, then clones of the geometry made. This avoids recreating the geometry every time a number in the clock changes. 

##### 10/01/2022

- Completely refactored the base code into a Class based system.
- Abstracted some processes into a new TextCharMesh Class.

##### 13/01/2022

- Added back in the particle system.
- Abstracted a particle to a new Class.
- Added in GUI controls for particle mesh spread and count.
- Created a custom fragment and vertex shader for the particle system; selects 1 of 12 'sand' colours from palette.