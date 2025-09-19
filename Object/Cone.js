export class Cone {
  constructor({radius=1, height=1, radialSegments=8}={}) {
    this.radius = radius;
    this.height = height;
    this.radialSegments = radialSegments;
    this.vertices = []; // placeholder vertices
    this.edges = [];
    this.faces = [];
  }
}
