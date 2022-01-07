### Development Notes
##### 07/01/2022

- Created a utility file.
- generateNormals generates all the triangles for a particular mesh, then calculates the midpoints (centres) and 'normals' for each.
- Showing directional helper arrows for normals.
- For memory management each 3D character mesh is generated only once, hidden, then clones of the geometry made. This avoids recreating the geometry every time a number in the clock changes. 