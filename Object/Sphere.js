export class Sphere {
  constructor({radius=1, segments=8}={}) {
    this.radius = radius;
    this.segments = segments;
    this.vertices = []; // placeholder vertices
    this.edges = [];    // placeholder edges
    this.faces = [];    // placeholder faces
  }
}
