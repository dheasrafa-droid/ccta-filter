export class Torus {
  constructor({radius=1, tube=0.4, radialSegments=8, tubularSegments=6}={}) {
    this.radius = radius;
    this.tube = tube;
    this.radialSegments = radialSegments;
    this.tubularSegments = tubularSegments;
    this.vertices = []; // placeholder vertices
    this.edges = [];
    this.faces = [];
  }
}
